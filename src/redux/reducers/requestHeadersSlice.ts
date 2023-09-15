import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HeaderID = string;
export type Header = {
	_id: HeaderID;
	isUsed: boolean;
	name: string;
	value: string;
};
type HeaderStateUpdate = HeaderID;
type HeaderValueUpdateObject = {
	parameterID: HeaderID;
	newValue: string;
};
type HeaderNameUpdateObject = {
	parameterID: HeaderID;
	newName: string;
};
type HeaderUpdateObject = {
	parameterID: HeaderID;
	newHeader: {
		header_name: string;
		header_value: string;
	};
};
type HeadersStore = Array<Header>;

const initialState: HeadersStore = [];

export const requestHeadersSlice = createSlice({
	name: "requestHeadersSlice",
	initialState,
	reducers: {
		deleteAllHeaders: () => [],
		updateHeadersOrder: (state, action: PayloadAction<HeadersStore>) => (state = action.payload),
		addHeader: (state, action: PayloadAction<Header>) => [...state, action.payload],
		deleteHeader: (state, action: PayloadAction<HeaderID>) =>
			[...state].filter((header: Header) => header._id !== action.payload),
		updateHeaderState: (state, action: PayloadAction<HeaderStateUpdate>) => {
			[...state].map((header): void => {
				if (header._id === action.payload) header.isUsed = !header.isUsed;
			});
		},
		updateHeader: (state, action: PayloadAction<HeaderUpdateObject>) => {
			[...state].map((parameter): void => {
				if (parameter._id === action.payload.parameterID) {
					parameter.name = action.payload.newHeader.header_name;
					parameter.value = action.payload.newHeader.header_value;
				}
			});
		},
		updateHeaderValue: (state, action: PayloadAction<HeaderValueUpdateObject>) => {
			[...state].map((header) => {
				if (header._id === action.payload.parameterID) header.value = action.payload.newValue;
			});
		},
		updateHeaderName: (state, action: PayloadAction<HeaderNameUpdateObject>) => {
			[...state].map((header) => {
				if (header._id === action.payload.parameterID) header.name = action.payload.newName;
			});
		}
	}
});

export default requestHeadersSlice;
