/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { EmptyObject } from "type-fest";
import { QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";

export namespace APIT {
	export type Method = "get" | "delete" | "post" | "put" | "patch";

	export interface RequestConfigI extends AxiosRequestConfig {
		url: string;
		method: Method | string;
		params?: Array<QueryParameterItem>;
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
