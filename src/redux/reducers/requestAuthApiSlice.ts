import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthApiStateT {
	key: string;
	value: string;
}

const initialState: AuthApiStateT = {
	key: "",
	value: ""
};

export const requestAuthApiSlice = createSlice({
	name: "requestAuthApiSlice",
	initialState,
	reducers: {
		clearApiAuth: () => initialState,
		updateApiAuthKey: (state, action: PayloadAction<string>) => {
			state.key = action.payload;
		},
		updateApiAuthValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}
	}
});

export default requestAuthApiSlice;
