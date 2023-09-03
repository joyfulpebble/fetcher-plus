import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QueryParameterID = string;
export type QueryParameter = {
	_id: QueryParameterID;
	isUsed: boolean;
	key: string;
	value: string;
};
type QueryParameterStateUpdate = QueryParameterID;
type QueryParameterValuesUpdateObject = {
	parameterID: QueryParameterID;
	updateType: "key" | "value" | "both";
	value:
		| string
		| {
				param_key: string;
				param_value: string;
		  };
};
type QueryParamsStore = Array<QueryParameter>;

const initialState: QueryParamsStore = [];

export const requestQueryParamsSlice = createSlice({
	name: "requestQueryParamsSlice",
	initialState,
	reducers: {
		deleteAllParams: () => [],
		updateParamsOrder: (state, action: PayloadAction<QueryParamsStore>) => (state = action.payload),
		addParameter: (state, action: PayloadAction<QueryParameter>) => [...state, action.payload],
		deleteParameter: (state, action: PayloadAction<QueryParameterID>) =>
			[...state].filter((parameter: QueryParameter) => parameter._id !== action.payload),
		updateParameterState: (state, action: PayloadAction<QueryParameterStateUpdate>) => {
			[...state].map((parameter): void => {
				if (parameter._id === action.payload) parameter.isUsed = !parameter.isUsed;
			});
		},
		updateParameter: (state, action: PayloadAction<QueryParameterValuesUpdateObject>) => {
			[...state].map((parameter): void => {
				if (parameter._id === action.payload.parameterID) {
					if (typeof action.payload.value !== "object") {
						if (action.payload.updateType === "key") parameter.key = action.payload.value;
						if (action.payload.updateType === "value") parameter.value = action.payload.value;
					}
					if (typeof action.payload.value === "object") {
						parameter.key = action.payload.value.param_key;
						parameter.value = action.payload.value.param_value;
					}
				}
			});
		}
	}
});

export default requestQueryParamsSlice;
