import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetConfigI } from "../../../types/request_configs";

const initState: GetConfigI = {
  params: {},
  url: ''
} 

export const getConfigSlice = createSlice({
  name: 'getConfig',
  initialState: initState,
  reducers: {
    clearConfig(state) {
      state = initState;
    },

    updateConfig(state, action: PayloadAction<GetConfigI>) {
      state.params = action.payload.params;
      state.url = action.payload.url;
    }
  }
})

export default getConfigSlice.reducer;