import { main_instance } from "./api-config";

import { type APIT } from "../types/api";
import { type AxiosResponse } from "axios";
import { type EmptyObject } from "type-fest";
import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";

type Params = {
	[key: string]: string;
};

export default class Service {
	public async get(config: APIT.RequestConfigI): Promise<AxiosResponse> {
		const response = await main_instance.request({
			url: config.url,
			method: config.method,
			params: this.paramsPreparation(config.params)
		});

		return response;
	}

	private paramsPreparation(
		paramsStore: Array<QueryParameterItem> | EmptyObject | Params
	): Params | EmptyObject {
		if (Array.isArray(paramsStore) && paramsStore.length === 0) return {};
		if (!Array.isArray(paramsStore)) return paramsStore;

		const unreadyParams = paramsStore;
		const result = [];

		for (let i = 0; i < unreadyParams.length; i++) {
			let currentParam = unreadyParams[i];
			if (currentParam.isUsed) result.push({ [currentParam.key]: currentParam.value });
		}

		return result.reduce((prev, curr) => Object.assign(prev, curr));
	}
}
