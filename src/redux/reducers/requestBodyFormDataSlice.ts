import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BodYFormDataItemID = string;
type ValueTextT = "text";
type ValueFileT = "file";
export type BodyFormDataItem = {
	_id: BodYFormDataItemID;
	isUsed: boolean;
	valueType: ValueFileT | ValueTextT;
	key: string;
	value: string;
};
type BodyFormDataStore = Array<BodyFormDataItem>;

const initialState: BodyFormDataStore = [];

export const requestBodyFormDataSlice = createSlice({
	name: "requestBodyFormDataSlice",
	initialState,
	reducers: {
		clearBodyFormData: () => initialState,
		addBodyFormDataTextItem: (state, action: PayloadAction<BodyFormDataItem>) => [
			...state,
			action.payload
		]
		// deleteFileLink: (state, action: PayloadAction<string>) => action.payload
	}
});

export default requestBodyFormDataSlice;
