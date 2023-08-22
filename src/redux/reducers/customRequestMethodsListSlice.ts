import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<string | undefined> = [];

export const customRequestMethodsListSlice = createSlice({
	name: "customRequestMethods",
	initialState,
	reducers: {
		addCustomMethod: (state, action: PayloadAction<string>) => [
			...state,
			action.payload.toUpperCase()
		],
		deleteCustomMethod: (state, action: PayloadAction<string>) =>
			[...state].filter((elem: string) => elem !== action.payload.toUpperCase())
	}
});

export default customRequestMethodsListSlice;
