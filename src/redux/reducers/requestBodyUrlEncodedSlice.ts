import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UrlEncodedItemID = string;

export interface BodyUrlEncodedItem {
	_id: UrlEncodedItemID;
	isUsed: boolean;
	key: string;
	value: string;
}
interface UrlEncodedValueUpdateObject {
	id: UrlEncodedItemID;
	value: string;
}
interface UrlEncodedKeyUpdateObject {
	id: UrlEncodedItemID;
	key: string;
}

type BodyUrlEncodedStore = Array<BodyUrlEncodedItem>;

const initialState: BodyUrlEncodedStore = [];

const requestBodyUrlEncodedSlice = createSlice({
	name: "requestHeadersSlice",
	initialState,
	reducers: {
		clearUrlEncoded: () => initialState,
		updateUrlEncodedOrder: (state, action: PayloadAction<BodyUrlEncodedStore>) =>
			(state = action.payload),
		addUrlEncodedItem: (state, action: PayloadAction<BodyUrlEncodedItem>) => [
			...state,
			action.payload
		],
		deleteUrlEncodedItem: (state, action: PayloadAction<UrlEncodedItemID>) =>
			[...state].filter((item: BodyUrlEncodedItem) => item._id !== action.payload),
		updateUrlEncodedState: (state, action: PayloadAction<UrlEncodedItemID>) => {
			[...state].map((item): void => {
				if (item._id === action.payload) item.isUsed = !item.isUsed;
			});
		},
		updateUrlEncodedValue: (state, action: PayloadAction<UrlEncodedValueUpdateObject>) => {
			[...state].map((item) => {
				if (item._id === action.payload.id) item.value = action.payload.value;
			});
		},
		updateUrlEncodedKey: (state, action: PayloadAction<UrlEncodedKeyUpdateObject>) => {
			[...state].map((item) => {
				if (item._id === action.payload.id) item.key = action.payload.key;
			});
		}
	}
});

export default requestBodyUrlEncodedSlice;
