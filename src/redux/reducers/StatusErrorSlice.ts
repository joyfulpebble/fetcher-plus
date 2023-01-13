import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState: string[] = [];

export const statusErrorSlice = createSlice({
  name: 'getConfig',
  initialState: initState,
  reducers: {
    addError(state, action: PayloadAction<string>) {
      state = [...state, action.payload];
    },

    clearStorage(state) {
      state = initState
    }
  }
})

export default statusErrorSlice.reducer;