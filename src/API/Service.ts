import { type APIT } from "../types/api";
import { type CommonT } from "../types/common";

import { type EmptyObject } from "type-fest";

import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";
import { type BodyFormDataItem } from "../redux/reducers/requestBodyFormDataSlice";

import getFile from "../idb/actions/getFile";

//TODO: Сделать обработку ошибок в запросе (ошибка в заголовках, теле запроса и тп...

// ✓ Пофиксить получение файлов из Indexed store для форм дата тела запроса
// Добавить логику для обработки raw тела запроса
// Переделать обработку `query` параметров (добавлять их сразу в ссылку)

export default class Service {
	public preparedRequestConfig: Promise<APIT.RequestConfig>;

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
				mode: "no-cors"
			});

			return response;
		});

		return result;
	}

	private async prepareConfig(config: APIT.RawRequestConfig): Promise<APIT.RequestConfig> {
		const url = config.url;
		const method = config.method;
		const headers = this.headersPrepare(config.headers);
		const query = this.paramsPrepare(config.params);
		const body = await this.bodyPrepare(config.body);

		return { url, method, query, headers, body };
	}

	private async bodyPrepare(
		unpreparedData: APIT.ConfigBody | undefined
	): Promise<APIT.RequestBody> {
		if (!unpreparedData) return null;

		const preparedData = this.initBodyPrepare(unpreparedData);

		// if (preparedData && preparedData.type == "raw") return preparedData;
		// if (preparedData && preparedData.type == "urlencoded") return preparedData;

		if (preparedData && preparedData.type == "form") {
			const form = new FormData();
			const awaitedData: Array<Awaited<APIT.InitPreparetedFormDataBodyItem>> = await Promise.all(
				preparedData.data as APIT.InitPreparetedFormDataBody
			);

			awaitedData.map((obj) => {
				Object.entries(obj).forEach(([key, value]) => {
					form.append(key, value);
				});
			});

			return form;
		}
		return null;
	}

	private initBodyPrepare(body: APIT.ConfigBody | undefined): APIT.InitBodyPrepare | null {
		if (!body || !body.data) return null;

		if (body.data_type === "form-data") {
			const unpreparedData = body.data as Array<BodyFormDataItem>;
			const isUsedPreparedData = unpreparedData.map((item) => item).filter((item) => item.isUsed);
			const preparetedData = isUsedPreparedData.map(async (item) => {
				if (item.valueType == "file") {
					const file_data = await getFile(item.fileInfo.id);

					if (!file_data)
						throw Error(`File by this: ${item.fileInfo.id} id not found in local database`);

					return { [item.key]: file_data.blob };
				} else {
					return { [item.key]: item.value };
				}
			});

			const form_data_result: APIT.InitBodyPrepare = {
				type: "form",
				data: preparetedData
			};

			return form_data_result;
		} else if (body.data_type === "raw") {
		} else if (body.data_type === "x-www-form-urlencoded") {
		}

		return null;
	}
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
