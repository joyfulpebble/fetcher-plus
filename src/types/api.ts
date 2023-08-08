/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { CommonT } from "./common";
import { EmptyObject } from "type-fest";

export namespace APIT {
	export interface RequestConfigI {
		requestUrl: string | undefined;
		requestParams: Object | EmptyObject;
		requestMethod: CommonT.MainRequestMethods;
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
