import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Token = string;

const initialState: Token = "";

export const requestAuthBearerSlice = createSlice({
	name: "requestAuthBearerSlice",
	initialState,
	reducers: {
		clearAuthToken: () => initialState,
		updateAuthBearerToken: (state, action: PayloadAction<Token>) => (state = action.payload)
	}
});

export default requestAuthBearerSlice;
