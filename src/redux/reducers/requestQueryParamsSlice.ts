import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QueryParameter = {
	isUsed: boolean;
	parameterKey: string;
	ParameterValue: string;
};

type QueryParamsState = Array<QueryParameter>;

const initialState: QueryParamsState = [];

export const requestQueryParamsSlice = createSlice({
	name: "requestQueryParamsSlice",
	initialState,
	reducers: {
		deleteAllParams: () => [],
		addParameter: (state, action: PayloadAction<QueryParameter>) =>
			(state = [...state, action.payload]),
		deleteParameter: (state, action: PayloadAction<number>) =>
			[...state].filter((elem, index) => index !== action.payload),
		setNotUsedParameter: (state, action: PayloadAction<number>) => {
			[...state][action.payload].isUsed = false;
		},
		unsetNotUsedParameter: (state, action: PayloadAction<number>) => {
			[...state][action.payload].isUsed = true;
		}
	}
});

export default requestQueryParamsSlice;
