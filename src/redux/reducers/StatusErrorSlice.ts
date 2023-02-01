import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RequestErrorsStateI } from "../../../types/simple_models";

const initState: RequestErrorsStateI = {
  errors: []
};

export const statusErrorSlice = createSlice({
  name: 'requestError',
  initialState: initState,
  reducers: {
    addError(state, action: PayloadAction<string>) {
      state.errors.push(action.payload);
    },

    clearErrorStorage(state) {
      state.errors = [];
    }
  }
})

export default statusErrorSlice.reducer;