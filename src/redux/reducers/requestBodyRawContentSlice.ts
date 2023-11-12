import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const requestBodyRawContentSlice = createSlice({
	name: "requestBodyTypeSlice",
	initialState,
	reducers: {
		clearRawContent: () => initialState,
		updateRawContent: (state, action: PayloadAction<string>) => action.payload
	}
});

export default requestBodyRawContentSlice;
