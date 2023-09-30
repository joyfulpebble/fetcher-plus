import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const requestUrlSlice = createSlice({
	name: "requestUrlSlice",
	initialState,
	reducers: {
		resetUrl: () => initialState,
		updateUrl: (state, action: PayloadAction<string>) => action.payload
	}
});

export default requestUrlSlice;
