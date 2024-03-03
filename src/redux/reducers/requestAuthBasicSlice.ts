import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthBasicStateT {
	key: string;
	value: string;
}

const initialState: AuthBasicStateT = {
	key: "",
	value: ""
};

export const requestAuthBasicSlice = createSlice({
	name: "requestAuthBasicSlice",
	initialState,
	reducers: {
		clearBasicAuth: () => initialState,
		updateBasicAuthKey: (state, action: PayloadAction<string>) => {
			state.key = action.payload;
		},
		updateBasicAuthValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}
	}
});

export default requestAuthBasicSlice;
