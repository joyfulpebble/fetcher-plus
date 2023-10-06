import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormDataItemID = string;
type ValueTextT = "text";
type ValueFileT = "file";
export type BodyFormDataItem = {
	_id: FormDataItemID;
	isUsed: boolean;
	valueType: ValueFileT | ValueTextT;
	key: string;
	value: string;
};
type FormDataValueUpdateObject = {
	formDataID: FormDataItemID;
	newValue: string;
};
type FormDataKeyUpdateObject = {
	formDataID: FormDataItemID;
	newKey: string;
};
type FormDataUpdateObject = {
	formDataID: FormDataItemID;
	newValues: {
		key: string;
		value: string;
	};
};
type FormDataValueTypeUpdateObject = {
	formDataID: FormDataItemID;
	type: ValueFileT | ValueTextT;
};

type BodyFormDataStore = Array<BodyFormDataItem>;

const initialState: BodyFormDataStore = [];

export const requestBodyFormDataSlice = createSlice({
	name: "requestBodyFormDataSlice",
	initialState,
	reducers: {
		clearFormData: () => initialState,
		updateFormDataOrder: (state, action: PayloadAction<BodyFormDataStore>) =>
			(state = action.payload),
		addBodyFormDataTextItem: (state, action: PayloadAction<BodyFormDataItem>) => [
			...state,
			action.payload
		],
		deleteFormData: (state, action: PayloadAction<FormDataItemID>) =>
			[...state].filter((item: BodyFormDataItem) => item._id !== action.payload),
		updateFormDataState: (state, action: PayloadAction<FormDataItemID>) => {
			[...state].map((item): void => {
				if (item._id === action.payload) item.isUsed = !item.isUsed;
			});
		},
		updateFormData: (state, action: PayloadAction<FormDataUpdateObject>) => {
			[...state].map((item): void => {
				if (item._id === action.payload.formDataID) {
					item.key = action.payload.newValues.key;
					item.value = action.payload.newValues.value;
				}
			});
		},
		updateFormDataValue: (state, action: PayloadAction<FormDataValueUpdateObject>) => {
			[...state].map((item) => {
				if (item._id === action.payload.formDataID) item.value = action.payload.newValue;
			});
		},
		updateFormDataKey: (state, action: PayloadAction<FormDataKeyUpdateObject>) => {
			[...state].map((item) => {
				if (item._id === action.payload.formDataID) item.key = action.payload.newKey;
			});
		},
		updateFormDataValueType: (state, action: PayloadAction<FormDataValueTypeUpdateObject>) => {
			[...state].map((item) => {
				if (item._id === action.payload.formDataID) item.valueType = action.payload.type;
			});
		}
	}
});

export default requestBodyFormDataSlice;
