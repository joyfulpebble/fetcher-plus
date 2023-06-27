import { AxiosRequestConfig, AxiosResponse } from "axios";
import { DynamicObjectKeys } from "../simple_models";

export interface GetConfigI {
	url: string;
	request_name: string;
	params: DynamicObjectKeys;
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
