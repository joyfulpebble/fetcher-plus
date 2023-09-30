import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CommonT } from "../../types/common";

interface BodyTypeI {
	contentType: CommonT.BodyContentType;
	rawType: CommonT.BodyRawType;
}

const initialState: BodyTypeI = {
	contentType: "none",
	rawType: "Text"
};

export const requestBodyTypeSlice = createSlice({
	name: "requestBodyTypeSlice",
	initialState,
	reducers: {
		resetBodyType: () => initialState,
		updateContentType: (state, action: PayloadAction<CommonT.BodyContentType>) => {
			state.contentType = action.payload;
		},
		updateRawType: (state, action: PayloadAction<CommonT.BodyRawType>) => {
			state.rawType = action.payload;
		}
	}
});

export default requestBodyTypeSlice;
