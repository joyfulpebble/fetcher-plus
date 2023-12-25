import { main_instance } from "./api-config";

import { type APIT } from "../types/api";
import { type AxiosResponse } from "axios";
import { type EmptyObject } from "type-fest";
import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";

type Params = {
	[key: string]: string;
};

export default class Service {
	public async get(config: APIT.RequestConfigI): Promise<AxiosResponse> {
		const response = await main_instance.request({
			url: config.url,
			method: config.method,
			params: this.paramsPreparation(config.params),
			headers: this.headersPreparation(config.headers)
		});

		return response;
	}

	private paramsPreparation(
		paramsStore: Array<QueryParameterItem> | undefined
	): Params | EmptyObject {
		if (!paramsStore || paramsStore.length === 0) return {};

		const unreadyParams = paramsStore;
		const result = [{}];

		for (let i = 0; i < unreadyParams.length; i++) {
			if (!unreadyParams[i].isUsed || !unreadyParams[i].key || !unreadyParams[i].key) break;

			result.push({ [unreadyParams[i].key]: unreadyParams[i].value });
		}

		return result.reduce((prev, curr) => Object.assign(prev, curr));
	}

	private headersPreparation(
		headersStore: Array<RequestHeaderItem> | undefined
	): Params | EmptyObject {
		if (!headersStore || headersStore.length === 0) return {};

		const unreadyHeaders = headersStore;
		const result = [{}];

		for (let i = 0; i < unreadyHeaders.length; i++) {
			if (!unreadyHeaders[i].isUsed || !unreadyHeaders[i].key || !unreadyHeaders[i].key) break;

			result.push({ [unreadyHeaders[i].key]: unreadyHeaders[i].value });
		}

		return result.reduce((prev, curr) => Object.assign(prev, curr));
	}
}
