export interface DynamicObjectKeysI {
	[key: string]: string | number;
}

export interface MainInfoOfRequestFromFieldsI {
	request_name: string;
	request_url: string;
}

export interface InfoOfParamsFromFieldsI {
	parameter_name: string;
	parameter_value: string;
}

export interface RequestErrorsStateI {
	errors: Array<string | null>;
}

export interface RequestHistoryItemI {
	date: string;
	time: string;
	name: string;
	url: string;
	parameters: DynamicObjectKeysI;
}

export interface ErrorBoundaryStateI {
	error: boolean;
}
