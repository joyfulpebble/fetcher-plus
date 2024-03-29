import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QueryParameterID = string;
type QueryParameterStateUpdate = QueryParameterID;
type QueryParameterValuesUpdateObject = {
	parameterID: QueryParameterID;
	updateType: "key" | "value" | "both";
	value:
		| string
		| {
				key: string;
				value: string;
		  };
};

export type QueryParameterItem = {
	_id: QueryParameterID;
	isUsed: boolean;
	key: string;
	value: string;
};
type QueryParamsStore = Array<QueryParameterItem>;

const initialState: QueryParamsStore = [];

export const requestQueryParamsSlice = createSlice({
	name: "requestQueryParamsSlice",
	initialState,
	reducers: {
		deleteAllParams: () => [],
		updateParamsOrder: (state, action: PayloadAction<QueryParamsStore>) => (state = action.payload),
		addParameter: (state, action: PayloadAction<QueryParameterItem>) => [...state, action.payload],
		deleteParameter: (state, action: PayloadAction<QueryParameterID>) =>
			[...state].filter((parameter: QueryParameterItem) => parameter._id !== action.payload),
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
						parameter.key = action.payload.value.key;
						parameter.value = action.payload.value.value;
					}
				}
			});
		}
	}
});

export default requestQueryParamsSlice;
