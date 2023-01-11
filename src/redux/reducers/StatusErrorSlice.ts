import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const initState: AxiosError[] = [];

export const statusErrorSlice = createSlice({
  name: 'getConfig',
  initialState: initState,
  reducers: {
    addError(state, action: PayloadAction<AxiosError[]>) {
      state = [...state, ...action.payload];
    },

    clearStorage(state) {
      state = initState
    }
  }
})

export default statusErrorSlice.reducer;