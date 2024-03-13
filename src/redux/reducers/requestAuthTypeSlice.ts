import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonT } from "../../types/common";

export interface AuthTypeI {
	authType: CommonT.AuthType;
	authIsNeed: boolean;
	authApiKeyType: CommonT.AuthApiKeyType;
}

const initialState: AuthTypeI = {
	authType: "none",
	authIsNeed: true,
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
		updateAuthNeed: (state, action: PayloadAction<boolean>) => {
			state.authIsNeed = action.payload;
		},
		updateAuthApiKeyType: (state, action: PayloadAction<CommonT.AuthApiKeyType>) => {
			state.authApiKeyType = action.payload;
		}
	}
});

export default requestAuthTypeSlice;
