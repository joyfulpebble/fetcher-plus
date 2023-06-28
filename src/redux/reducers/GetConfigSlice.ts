import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetConfigI } from "../../types/api_models";

const initState: GetConfigI = {
	url: "",
	request_name: "",
	params: {}
};

export const getConfigSlice = createSlice({
	name: "getConfig",
	initialState: initState,
	reducers: {
		clearConfig(state) {
			// eslint-disable-next-line no-unused-vars
			state = initState;
		},

		updateConfig(state, action: PayloadAction<GetConfigI>) {
			state.params = action.payload.params;
			state.url = action.payload.url;
			state.request_name = action.payload.request_name;
		}
	}
});

export default getConfigSlice.reducer;
