import { main_instance } from "./api-config";
import { AxiosResponse } from "axios";

import type { EmptyObject } from "type-fest";
import type { GeneralT } from "../types/general";

export default class Service {
	public static async get(
		path: string,
		params: EmptyObject | GeneralT.DynamicObjectI
	): Promise<AxiosResponse> {
		const response = await main_instance.get(path, {
			params: params
		});

		return response;
	}
}
