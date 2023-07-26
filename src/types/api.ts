/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { GeneralT } from "./general";

export namespace APIT {
	export interface GetConfigI {
		url: string;
		request_name: string;
		params: GeneralT.DynamicObjectI;
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
}
