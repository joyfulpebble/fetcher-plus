import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HeaderID = string;
export type Header = {
	_id: HeaderID;
	isUsed: boolean;
	key: string;
	value: string;
};
type HeaderStateUpdate = HeaderID;
type HeaderValuesUpdateObject = {
	parameterID: HeaderID;
	updateType: "key" | "value" | "both";
	value:
		| string
		| {
				param_key: string;
				param_value: string;
		  };
};
type HeadersStore = Array<Header>;

const initialState: HeadersStore = [];

export const requestHeadersSlice = createSlice({
	name: "requestHeadersSlice",
	initialState,
	reducers: {
		deleteAllHeaders: () => [],
		// updateHeadersOrder: (state, action: PayloadAction<HeadersStore>) => (state = action.payload)
		addHeader: (state, action: PayloadAction<Header>) => [...state, action.payload]
		// deleteParameter: (state, action: PayloadAction<HeaderID>) =>
		// 	[...state].filter((parameter: Header) => parameter._id !== action.payload),
		// updateParameterState: (state, action: PayloadAction<HeaderStateUpdate>) => {
		// 	[...state].map((parameter): void => {
		// 		if (parameter._id === action.payload) parameter.isUsed = !parameter.isUsed;
		// 	});
		// },
		// updateParameter: (state, action: PayloadAction<HeaderValuesUpdateObject>) => {
		// 	[...state].map((parameter): void => {
		// 		if (parameter._id === action.payload.parameterID) {
		// 			if (typeof action.payload.value !== "object") {
		// 				if (action.payload.updateType === "key") parameter.key = action.payload.value;
		// 				if (action.payload.updateType === "value") parameter.value = action.payload.value;
		// 			}
		// 			if (typeof action.payload.value === "object") {
		// 				parameter.key = action.payload.value.param_key;
		// 				parameter.value = action.payload.value.param_value;
		// 			}
		// 		}
		// 	});
		// }
	}
});

export default requestHeadersSlice;
