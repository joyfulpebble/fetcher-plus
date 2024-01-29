import { type APIT } from "../types/api";
import { type CommonT } from "../types/common";

import { type EmptyObject } from "type-fest";

import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";
import { type BodyFormDataItem } from "../redux/reducers/requestBodyFormDataSlice";

import getFile from "../idb/actions/getFile";

//TODO:	Реализовать обработку ошибок в запросе (ошибка в заголовках, теле запроса и тп...)
//TODO: Реализовать возможность настраивать `fetch` (cache, referrer, redirect и тп...)

// ✓ Пофиксить получение файлов из Indexed store для форм дата тела запроса
// ✓ Добавить логику для обработки raw тела запроса
// Добавить логику для обработки `url-encoded` тела запроса
// Переделать обработку `query` параметров (добавлять их сразу в ссылку)

export default class Service {
	private preparedRequestConfig: Promise<APIT.RequestConfig>;

	constructor(config: APIT.RawRequestConfig) {
		this.preparedRequestConfig = this.prepareConfig(config);
	}

	public get getRequestConfig() {
		return this.preparedRequestConfig;
	}

	public doRequest(): Promise<Response> {
		const result = this.preparedRequestConfig.then((cfg) => {
			const response = fetch(cfg.url, {
				method: cfg.method,
				headers: cfg.headers,
				body: cfg.body,
				mode: "cors"
			});

			return response;
		});

		return result;
	}

	private async prepareConfig(config: APIT.RawRequestConfig): Promise<APIT.RequestConfig> {
		const url = config.url;
		const method = config.method;
		const query = this.paramsPrepare(config.params);
		const headers = new Headers(this.headersPrepare(config.headers));
		const body = await this.bodyPrepare(config.body);

		return { url, method, query, headers, body };
	}

	private async bodyPrepare(
		unpreparedData: APIT.ConfigBody | undefined
	): Promise<APIT.RequestBody> {
		if (!unpreparedData || !unpreparedData.data) return null;

		if (unpreparedData.data_type == "raw") {
			if (unpreparedData.raw_data_type == "JSON") return JSON.stringify(unpreparedData.data);

			return unpreparedData.data.toString();
		}
		// if (unpreparedData.data_type == "x-www-form-urlencoded") return "url-encode";
		if (unpreparedData.data_type == "form-data") {
			const asyncFormData = this.initFormDataBodyPrepare(unpreparedData);
			if (!asyncFormData) return null;

			const form = new FormData();
			const awaitedFormData: Array<Awaited<APIT.InitPreparetedFormDataBodyItem>> =
				await Promise.all(asyncFormData as APIT.InitPreparetedFormDataBody);

			awaitedFormData.map((obj) => {
				Object.entries(obj).forEach(([key, value]) => {
					if (typeof value !== "string") form.append(key, value.blob, value.name);
					else form.append(key, value);
				});
			});

			return form;
		}

		return null;
	}

	private initFormDataBodyPrepare(
		body: APIT.ConfigBody | undefined
	): APIT.InitPreparetedFormDataBody | null {
		if (!body || !body.data) return null;

		const unpreparedData = body.data as Array<BodyFormDataItem>;
		const isUsedPreparedData = unpreparedData.map((item) => item).filter((item) => item.isUsed);
		const preparetedData = isUsedPreparedData.map(async (item) => {
			if (item.valueType == "file") {
				const file_data = await getFile(item.fileInfo.id);

				if (!file_data)
					// ! Нужен кастомный обработчик ошибок
					throw Error(`File by this: ${item.fileInfo.id} id not found in local database`);

				return {
					[item.key]: {
						blob: file_data.blob,
						name: file_data.name
					}
				};
			} else {
				return { [item.key]: item.value };
			}
		});

		return preparetedData;
	}
	// ? Переписать функции ниже ↓ в одну, которая будет принимать в себя generic type ? \\
	private paramsPrepare(
		paramsStore: Array<QueryParameterItem> | undefined
	): CommonT.StringKeyVal | EmptyObject {
		if (!paramsStore || paramsStore.length === 0) return {};

		const unreadyParams = paramsStore;
		const result = [{}];

		for (let i = 0; i < unreadyParams.length; i++) {
			if (!unreadyParams[i].isUsed || !unreadyParams[i].key || !unreadyParams[i].key) continue;

			result.push({ [unreadyParams[i].key]: unreadyParams[i].value });
		}

		return result.reduce((prev, curr) => Object.assign(prev, curr));
	}
	private headersPrepare(
		headersStore: Array<RequestHeaderItem> | undefined
	): CommonT.StringKeyVal | EmptyObject {
		if (!headersStore || headersStore.length === 0) return {};

		const unreadyHeaders = headersStore;
		const result = [{}];

		for (let i = 0; i < unreadyHeaders.length; i++) {
			if (!unreadyHeaders[i].isUsed || !unreadyHeaders[i].key || !unreadyHeaders[i].key) continue;

			result.push({ [unreadyHeaders[i].key]: unreadyHeaders[i].value });
		}

		return result.reduce((prev, curr) => Object.assign(prev, curr));
	}
}
