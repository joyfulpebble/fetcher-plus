/* eslint-disable no-unused-vars */
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";
import { type BodyFormDataItem } from "../redux/reducers/requestBodyFormDataSlice";
import { type BodyUrlEncodedItem } from "../redux/reducers/requestBodyUrlEncodedSlice";
import { type CommonT } from "./common";
import { type EmptyObject } from "type-fest";

export namespace APIT {
	export type Method = "GET" | "DELETE" | "POST" | "PUT" | "PATCH";
	export type ConfigBodyData = string | Array<BodyFormDataItem> | Array<BodyUrlEncodedItem>;
	export type ConfigBody = {
		data: ConfigBodyData;
		data_type: CommonT.BodyContentType;
		raw_data_type: CommonT.BodyRawType;
	};

	export type RequestBody = string | FormData | null;
	export interface RawRequestConfig {
		url: string;
		method: Method | string;
		params?: Array<QueryParameterItem>;
		headers?: Array<RequestHeaderItem>;
		body?: ConfigBody;
	}
	export interface RequestConfig {
		url: string;
		method: Method | string;
		query: CommonT.StringKeyVal | EmptyObject;
		headers: CommonT.StringKeyVal | EmptyObject;
		body: RequestBody;
	}

	export type InitPreparetedFormDataBody = Array<Promise<{ [key: string]: Blob | string }>>;
	export type InitPreparetedFormDataBodyItem = Promise<{ [key: string]: Blob | string }>;
	export interface InitBodyPrepare {
		type: "form" | "raw" | "urlencoded";
		data: InitPreparetedFormDataBody | string | CommonT.StringKeyVal;
	}

	// ? ------------------- ? \\
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
