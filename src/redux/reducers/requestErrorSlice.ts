/* eslint-disable no-duplicate-imports */
import { createSlice } from "@reduxjs/toolkit";

import type { ReduxT } from "../../types/redux";
import type { PayloadAction } from "@reduxjs/toolkit";

const initState: ReduxT.RequestErrorsStateI = {
	errors: []
};

export const requestErrorSlice = createSlice({
	name: "requestError",
	initialState: initState,
	reducers: {
		addError(state, action: PayloadAction<string>) {
			state.errors.push(action.payload);
		},

		clearErrorStorage(state) {
			state.errors = [];
		}
	}
});

export default requestErrorSlice.reducer;
