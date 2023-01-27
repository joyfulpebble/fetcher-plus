import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface errorsArrayStateI {
  errors: Array<string | null>
}

const initState: errorsArrayStateI = {
  errors: []
};

export const statusErrorSlice = createSlice({
  name: 'getConfig',
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