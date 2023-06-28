import { AxiosRequestConfig, AxiosResponse } from "axios";
import { DynamicObjectKeysI } from "../simple_models";

export interface GetConfigI {
	url: string;
	request_name: string;
	params: DynamicObjectKeysI;
}

export interface InterceptorI extends AxiosRequestConfig {
	metadata?: {
		endTime?: number;
		startTime?: number;
		duration?: number;
	};
}

export interface InterceptorResponseI extends AxiosResponse {
	config: InterceptorI;
	duration?: number;
}
