import { main_instance } from "./api-config";
import { AxiosResponse } from "axios";

export default class Service {
	static async GET(path: string, params?: object): Promise<AxiosResponse> {
		const response = await main_instance.get(path, {
			params: params
		});

		return response;
	}
}
