import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetConfigType } from "../../types/request_configs";

const initState: GetConfigType = {
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

    updateConfig(state, action: PayloadAction<GetConfigType>) {
      state.params = action.payload.params;
      state.url = action.payload.url;
    }
  }
})

export default getConfigSlice.reducer;