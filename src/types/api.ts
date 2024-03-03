/* eslint-disable no-unused-vars */
import { type CommonT } from "./common";

import { type QueryParameterItem } from "../redux/reducers/requestQueryParamsSlice";
import { type RequestHeaderItem } from "../redux/reducers/requestHeadersSlice";
import { type BodyFormDataItem } from "../redux/reducers/requestBodyFormDataSlice";
import { type BodyUrlEncodedItem } from "../redux/reducers/requestBodyUrlEncodedSlice";
import { type AuthApiStateT } from "../redux/reducers/requestAuthApiSlice";
import { type AuthBasicStateT } from "../redux/reducers/requestAuthBasicSlice";
import { type Token as AuthBearerStateT } from "../redux/reducers/requestAuthBearerSlice";

export namespace APIT {
	export type Method = "GET" | "DELETE" | "POST" | "PUT" | "PATCH";
	export type ConfigBodyData = string | Array<BodyFormDataItem> | Array<BodyUrlEncodedItem>;
	export type ConfigBody = {
		data: ConfigBodyData;
		data_type: CommonT.BodyContentType;
		raw_data_type: CommonT.BodyRawType;
	};
	export type ConfigAuthData = AuthApiStateT | AuthBasicStateT | AuthBearerStateT;
	export type ConfigAuth = {
		auth: ConfigAuthData;
		auth_type: CommonT.AuthType;
		api_key_location: CommonT.AuthApiKeyType;
	};
	export type AuthPrepareT = CommonT.StringKeyVal;

	export type RequestBody = null | string | FormData | URLSearchParams;
	export interface RawRequestConfig {
		url: string;
		method: Method | string;
		auth?: ConfigAuth;
		params?: Array<QueryParameterItem>;
		headers?: Array<RequestHeaderItem>;
		body?: ConfigBody;
	}

	interface InitPreparetedFormDataFileInfo {
		blob: Blob;
		name: string;
	}
	export type InitPreparetedFormDataBody = Array<
		Promise<{ [key: string]: InitPreparetedFormDataFileInfo | string }>
	>;
	export type InitPreparetedFormDataBodyItem = Promise<{
		[key: string]: InitPreparetedFormDataFileInfo | string;
	}>;
}
