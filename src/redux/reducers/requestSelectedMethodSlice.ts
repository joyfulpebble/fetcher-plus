import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIT } from "../../types/api";

const initialState: APIT.Method | string = "GET";

export const requestSelectedMethodSlice = createSlice({
	name: "requestSelectedMethodSlice",
	initialState,
	reducers: {
		resetRequestMethod: () => "GET",
		updateRequestMethod: (state, action: PayloadAction<string>) => action.payload.toUpperCase()
	}
});

export default requestSelectedMethodSlice;
