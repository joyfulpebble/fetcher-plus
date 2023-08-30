import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QueryParameter = {
	isUsed: boolean;
	parameterKey: string;
	parameterValue: string;
};
type QueryParamsState = Array<QueryParameter>;
type QueryParamUpdateObject = {
	parameterIndex: number;
	newValue: string;
};

const initialState: QueryParamsState = [];

export const requestQueryParamsSlice = createSlice({
	name: "requestQueryParamsSlice",
	initialState,
	reducers: {
		deleteAllParams: () => [],
		addParameter: (state, action: PayloadAction<QueryParameter>) => {
			state = [...state, action.payload];
		},
		deleteParameter: (state, action: PayloadAction<number>) => {
			[...state].filter((elem, index) => index !== action.payload);
		},
		setNotUsedParameter: (state, action: PayloadAction<number>) => {
			[...state][action.payload].isUsed = false;
		},
		unsetNotUsedParameter: (state, action: PayloadAction<number>) => {
			[...state][action.payload].isUsed = true;
		},
		updateParameterKey: (state, action: PayloadAction<QueryParamUpdateObject>) => {
			[...state][action.payload.parameterIndex].parameterKey = action.payload.newValue;
		},
		updateParameterValue: (state, action: PayloadAction<QueryParamUpdateObject>) => {
			[...state][action.payload.parameterIndex].parameterValue = action.payload.newValue;
		}
	}
});

export default requestQueryParamsSlice;
