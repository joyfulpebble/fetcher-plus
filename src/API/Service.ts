import { main_instance } from "./api-config";

import { type APIT } from "../types/api";
import { type CommonT } from "../types/common";
import { type AxiosResponse } from "axios";
import { type EmptyObject } from "type-fest";
import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";

import getFile from "../idb/actions/getFile";

//TODO: Сделать обработку ошибок в запросе (ошибка в заголовках, теле запроса и тп...)
//TODO: Реализовать автосчитывание параметров из ссылки

export default class Service {
	private url: string;
	private body: APIT.Body | null;
	private method: APIT.Method | string;
	private params: APIT.StringKeyVal | EmptyObject;
	private headers: APIT.StringKeyVal | EmptyObject;

	public constructor(config: APIT.RequestConfigI) {
		this.url = config.url;
		this.method = config.method;
		this.body = config.body || null;
		this.params = this.paramsPreparation(config.params);
		this.headers = this.headersPreparation(config.headers);
	}

	public get getRequestConfig() {
		return {
			url: this.url,
			body: this.body,
			params: this.params,
			method: this.method,
			headers: this.headers
		};
	}

	public updateHeader(key: string, new_value: string) {
		Object.assign(this.headers, { [key]: new_value });
	}

	// public async doRequest(): Promise<AxiosResponse> {
	// 	const response = await main_instance.request({
	// 		url: config.url,
	// 		method: config.method,
	// 		params: this.paramsPreparation(config.params),
	// 		headers: this.headersPreparation(config.headers),
	// 		data: this.bodyDataPreparation(config.body)
	// 	});

	// 	return response;
	// }

	private bodyDataPreparation(body: APIT.Body | undefined) {
		// if (!body || !body.data) return null;
		// if (body.type.contentType === "none") return null;

		// if (body.type.contentType === "raw" && body.data.raw) return body.data;
		// if (body.type.contentType === "form-data" && body.data.form) {
		// 	const form_data = new FormData();

		// 	body.data.form.map(async (item) => {
		// 		if (!item.isUsed) return;
		// 		if (item.valueType === "text") {
		// 			form_data.append(item.key, item.value);
		// 		} else {
		// 			const result = await getFile(item.fileInfo.id);

		// 			if (!result) return;
		// 			form_data.append(item.key, result.blob);
		// 		}
		// 	});

		// 	return form_data;
		// }
		// if (body.type.contentType === "x-www-form-urlencoded" && body.data.urlencoded) {
		// 	const url_encoded = new URLSearchParams();

		// 	body.data.urlencoded.map((item) => {
		// 		if (!item.isUsed) return;

		// 		url_encoded.append(item.key, item.value);
		// 	});

		// 	return url_encoded;
		// }
		return null;
	}

	private paramsPreparation(
		paramsStore: Array<QueryParameterItem> | undefined
	): APIT.StringKeyVal | EmptyObject {
		if (!paramsStore || paramsStore.length === 0) return {};

		const unreadyParams = paramsStore;
		const result = [{}];

		for (let i = 0; i < unreadyParams.length; i++) {
			if (!unreadyParams[i].isUsed || !unreadyParams[i].key || !unreadyParams[i].key) continue;

			result.push({ [unreadyParams[i].key]: unreadyParams[i].value });
		}

		return result.reduce((prev, curr) => Object.assign(prev, curr));
	}
	private headersPreparation(
		headersStore: Array<RequestHeaderItem> | undefined
	): APIT.StringKeyVal | EmptyObject {
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
