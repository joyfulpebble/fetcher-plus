import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HeaderID = string;
export type RequestHeaderItem = {
	_id: HeaderID;
	isUsed: boolean;
	key: string;
	value: string;
};
type HeaderStateUpdate = HeaderID;
type HeaderValueUpdateObject = {
	headerID: HeaderID;
	value: string;
};
type HeaderNameUpdateObject = {
	headerID: HeaderID;
	key: string;
};
type HeaderUpdateObject = {
	headerID: HeaderID;
	data: {
		key: string;
		value: string;
	};
};
type HeadersStore = Array<RequestHeaderItem>;

const initialState: HeadersStore = [];

export const requestHeadersSlice = createSlice({
	name: "requestHeadersSlice",
	initialState,
	reducers: {
		deleteAllHeaders: () => initialState,
		updateHeadersOrder: (state, action: PayloadAction<HeadersStore>) => (state = action.payload),
		addHeader: (state, action: PayloadAction<RequestHeaderItem>) => [...state, action.payload],
		deleteHeader: (state, action: PayloadAction<HeaderID>) =>
			[...state].filter((header: RequestHeaderItem) => header._id !== action.payload),
		updateHeaderState: (state, action: PayloadAction<HeaderStateUpdate>) => {
			[...state].map((header): void => {
				if (header._id === action.payload) header.isUsed = !header.isUsed;
			});
		},
		updateHeader: (state, action: PayloadAction<HeaderUpdateObject>) => {
			[...state].map((parameter): void => {
				if (parameter._id === action.payload.headerID) {
					parameter.key = action.payload.data.key;
					parameter.value = action.payload.data.value;
				}
			});
		},
		updateHeaderValue: (state, action: PayloadAction<HeaderValueUpdateObject>) => {
			[...state].map((header) => {
				if (header._id === action.payload.headerID) header.value = action.payload.value;
			});
		},
		updateHeaderName: (state, action: PayloadAction<HeaderNameUpdateObject>) => {
			[...state].map((header) => {
				if (header._id === action.payload.headerID) header.key = action.payload.key;
			});
		}
	}
});

export default requestHeadersSlice;
