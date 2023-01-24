import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface errorsArrayStateI {
  errors: [string]
}

const initState: errorsArrayStateI = {
  errors: ['']
};

export const statusErrorSlice = createSlice({
  name: 'getConfig',
  initialState: initState,
  reducers: {
    addError(state, action: PayloadAction<string>) {
      state.errors.push(action.payload)
    },

    clearStorage(state) {
      state = initState
    }
  }
})

export default statusErrorSlice.reducer;