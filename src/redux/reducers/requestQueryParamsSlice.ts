import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Object = {};

export const requestQueryParamsSlice = createSlice({
	name: "requestQueryParamsSlice",
	initialState,
	reducers: {
		deleteAllParams() {
			return {};
		},

		addParameter(state, action: PayloadAction<Object>) {
			state = Object.assign(state, action.payload);
		}

		// deleteParameter(state, action: PayloadAction<string>) {
		// 	state = action.payload;
		// }
	}
});

export default requestQueryParamsSlice;
