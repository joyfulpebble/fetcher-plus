import { createSlice } from "@reduxjs/toolkit";

import type { CommonT } from "../../types/common";

const initialState: Array<CommonT.MainRequestMethods> = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export const requestMethodsListSlice = createSlice({
	name: "requestConfigSlice",
	initialState,
	reducers: {}
});

export default requestMethodsListSlice;
