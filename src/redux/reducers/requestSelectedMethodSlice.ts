import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "GET";

export const requestSelectedMethodSlice = createSlice({
	name: "requestSelectedMethodSlice",
	initialState,
	reducers: {
		resetRequestMethod: () => "GET",
		updateRequestMethod: (state, action: PayloadAction<string>) => action.payload.toUpperCase()
	}
});

export default requestSelectedMethodSlice;
