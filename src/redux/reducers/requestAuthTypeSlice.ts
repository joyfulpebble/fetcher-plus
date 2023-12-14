import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonT } from "../../types/common";

interface AuthTypeI {
	authType: CommonT.AuthType;
	authApiKeyType: CommonT.AuthApiKeyType;
}

const initialState: AuthTypeI = {
	authType: "none",
	authApiKeyType: "header"
};

export const requestAuthTypeSlice = createSlice({
	name: "requestAuthTypeSlice",
	initialState,
	reducers: {
		resetAuth: () => initialState,
		updateAuthType: (state, action: PayloadAction<CommonT.AuthType>) => {
			state.authType = action.payload;
		},
		updateAuthApiKeyType: (state, action: PayloadAction<CommonT.AuthApiKeyType>) => {
			state.authApiKeyType = action.payload;
		}
	}
});

export default requestAuthTypeSlice;
