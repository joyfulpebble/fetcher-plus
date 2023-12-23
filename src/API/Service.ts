import { main_instance } from "./api-config";

import type { APIT } from "../types/api";
import { type AxiosResponse } from "axios";

export default class Service {
	public async get(config: APIT.RequestConfigI): Promise<AxiosResponse> {
		const response = await main_instance.request({
			url: config.url,
			method: config.method
		});

		return response;
	}
}
