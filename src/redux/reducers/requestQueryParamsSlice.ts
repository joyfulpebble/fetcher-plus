import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<[string, string]> = [];

export const requestQueryParamsSlice = createSlice({
	name: "requestQueryParamsSlice",
	initialState,
	reducers: {
		deleteAllParams: () => [],
		addParameter: (state, action: PayloadAction<[string, string]>) => [...state, action.payload],
		deleteParameter: (state, action: PayloadAction<number>) =>
			[...state].filter((elem, index) => index !== action.payload)
	}
});

export default requestQueryParamsSlice;
