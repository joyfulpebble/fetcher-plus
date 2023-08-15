import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<string | undefined> = [];

export const customRequestMethodsListSlice = createSlice({
	name: "customRequestMethods",
	initialState,
	reducers: {
		addCustomMethod: (state, action: PayloadAction<string>) => [...state, action.payload]
	}
});

export default customRequestMethodsListSlice;
