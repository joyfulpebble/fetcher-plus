/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";
import { type BodyFormDataItem } from "../redux/reducers/requestBodyFormDataSlice";
import { type BodyUrlEncodedItem } from "../redux/reducers/requestBodyUrlEncodedSlice";
import { type CommonT } from "./common";

export namespace APIT {
	export type Method = "GET" | "DELETE" | "POST" | "PUT" | "PATCH";
	export type Data = string | Array<BodyFormDataItem> | Array<BodyUrlEncodedItem>;
	export type Body = {
		data: Data;
		data_type: CommonT.BodyContentType;
		raw_data_type: CommonT.BodyRawType;
	};
	export type StringKeyVal = {
		[key: string]: string;
	};

	export interface RequestConfigI {
		url: string;
		method: Method | string;
		params?: Array<QueryParameterItem>;
		headers?: Array<RequestHeaderItem>;
		body?: Body;
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
