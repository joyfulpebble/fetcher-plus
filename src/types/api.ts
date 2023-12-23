/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { EmptyObject } from "type-fest";

export namespace APIT {
	export type Method = "get" | "delete" | "post" | "put" | "patch";

	export interface RequestConfigI extends Pick<AxiosRequestConfig, "url" | "method" | "params"> {
		url: string;
		method: Method | string;
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
