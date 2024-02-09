import { type EmptyObject } from "type-fest";

import { type APIT } from "../types/api";
import { type CommonT } from "../types/common";

import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";
import { type BodyFormDataItem } from "../redux/reducers/requestBodyFormDataSlice";
import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type BodyUrlEncodedItem } from "../redux/reducers/requestBodyUrlEncodedSlice";

import getFile from "../idb/actions/getFile";

//TODO:	Реализовать обработку ошибок в запросе (ошибка в заголовках, теле запроса и тп...)
//TODO: Реализовать возможность настраивать `fetch` (cache, referrer, redirect и тп...)

// ✓ Пофиксить получение файлов из Indexed store для форм дата тела запроса
// ✓ Добавить логику для обработки raw тела запроса
// ✓ Добавить логику для обработки `url-encoded` тела запроса
// -+✓ Переделать обработку `query` параметров (добавлять их сразу в ссылку)
// Релизовать авторизацию
// - API ключ в query
// - API ключ в heder
// - Bearer токен
// - Basic auth

type ItemsArrayToObjectInput = {
	_id: string;
	isUsed: boolean;
	key: string;
	value: string;
};

export default class Service {
	private preparedRequestConfig: Promise<APIT.RequestConfig>;

	constructor(config: APIT.RawRequestConfig) {
		this.preparedRequestConfig = this.configPrepare(config);
	}

	public async doRequest(): Promise<Response> {
		const cfg = await this.preparedRequestConfig;
		const response = fetch(cfg.url, {
			method: cfg.method,
			headers: cfg.headers,
			body: cfg.body,
			mode: "cors"
		});

		return response;
	}

	private async configPrepare(config: APIT.RawRequestConfig): Promise<APIT.RequestConfig> {
		const method = config.method;
		const headers = new Headers(this.arrayOfStoreItemsToObject<RequestHeaderItem>(config.headers));
		const body = await this.bodyPrepare(config.body);

		let url = config.url;

		if (config.params) {
			const params_obj = this.arrayOfStoreItemsToObject<QueryParameterItem>(config.params);
			const query = `?${new URLSearchParams(params_obj).toString()}`;

			url = config.url + query;
		}

		return { url, method, headers, body };
	}

	private async bodyPrepare(
		unpreparedData: APIT.ConfigBody | undefined
	): Promise<APIT.RequestBody> {
		if (!unpreparedData || !unpreparedData.data) return null;

		if (unpreparedData.data_type == "raw") {
			if (unpreparedData.raw_data_type == "JSON") return JSON.stringify(unpreparedData.data);

			return unpreparedData.data.toString();
		}
		if (unpreparedData.data_type == "x-www-form-urlencoded") {
			const unprepared_urlencoded = this.arrayOfStoreItemsToObject<BodyUrlEncodedItem>(
				unpreparedData.data as Array<BodyUrlEncodedItem>
			);
			const urlencoded = new URLSearchParams(unprepared_urlencoded);

			return urlencoded;
		}
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

	private arrayOfStoreItemsToObject<Item extends ItemsArrayToObjectInput>(
		store: Array<Item> | undefined
	): CommonT.StringKeyVal | EmptyObject {
		if (!store || store.length == 0) return {};

		const unreadyParams = store;
		const result = [{}];

		for (let i = 0; i < unreadyParams.length; i++) {
			if (!unreadyParams[i].isUsed || !unreadyParams[i].key || !unreadyParams[i].key) continue;

			result.push({ [unreadyParams[i].key]: unreadyParams[i].value });
		}

		return result.reduce((prev, curr) => Object.assign(prev, curr));
	}
}
