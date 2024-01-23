import { main_instance } from "./api-config";

import { type APIT } from "../types/api";
import { type CommonT } from "../types/common";
import { type AxiosResponse } from "axios";
import { type EmptyObject } from "type-fest";

import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";
import { type BodyFormDataItem } from "../redux/reducers/requestBodyFormDataSlice";

import getFile from "../idb/actions/getFile";

//TODO: Сделать обработку ошибок в запросе (ошибка в заголовках, теле запроса и тп...
// Добавить логику для обработки raw тела запроса
// [🤔] Пофиксить получение файлов из Indexed store для форм дата тела запроса

export default class Service {
	public prepearedRequestConfig: Promise<any>;

	constructor(config: APIT.RequestConfigI) {
		this.prepearedRequestConfig = this.prepareConfig(config);
	}

	// public get getRequestConfig() {
	// 	return {
	// 		url: this.url,
	// 		body: this.body,
	// 		params: this.params,
	// 		method: this.method,
	// 		headers: this.headers
	// 	};
	// }
	public async doRequest(): Promise<any> {
		const result = this.prepearedRequestConfig.then((cfg) => {
			console.log(cfg);

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

	private async prepareConfig(config: APIT.RequestConfigI) {
		const url = config.url;
		const method = config.method;
		const headers = this.headersPrepare(config.headers);
		const query = this.paramsPrepare(config.params);

		const prepearedBodyPromise = await this.finalBodyPrepare(config.body);
		const prepearedBody = prepearedBodyPromise;

		return { url, method, query, headers, body: prepearedBody };
	}

	private async finalBodyPrepare(unpreparedData: APIT.ConfigBody | undefined) {
		const prepearedData = await this.initBodyPrepare(unpreparedData);

		if (prepearedData && prepearedData.type == "form") {
			const form = new FormData();
			const data = await Promise.all(prepearedData.data);

			data.map((obj) => {
				Object.entries(obj).forEach(([key, value]) => {
					form.append(key, value);
				});
			});

			return form;
		}

		return null;
	}
	private async initBodyPrepare(body: APIT.ConfigBody | undefined): Promise<{
		type: string;
		data: Promise<
			| {
					[x: string]: Blob;
			  }
			| {
					[x: string]: string;
			  }
		>[];
	} | null> {
		if (!body || !body.data) return null;
		if (body.data_type === "form-data") {
			const data = body.data as Array<BodyFormDataItem>;
			const prepearedFormData = data.map(async (item) => {
				if (item.valueType == "file") {
					const file_data = await getFile(item.fileInfo.id);

					if (!file_data)
						throw Error(`File by this: ${item.fileInfo.id} id not found in local database`);

					return { [item.key]: file_data.blob };
				} else {
					return { [item.key]: item.value };
				}
			});

			const result = {
				type: "form",
				data: prepearedFormData
			};

			return result;
		}
		return null;
	}
	private paramsPrepare(
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
	private headersPrepare(
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
