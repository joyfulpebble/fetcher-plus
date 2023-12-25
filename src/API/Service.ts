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
}
