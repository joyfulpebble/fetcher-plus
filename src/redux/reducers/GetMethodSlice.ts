import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GetFetchedState {
  data: string;
  isLoading: boolean;
  fetchUrl: string
  error: string;
}

const initState: GetFetchedState = {
  data: '',
  isLoading: false,
  fetchUrl: '',
  error: ''
 } 

export const getMethodSlice = createSlice({
  name: 'fetchedData',
  initialState: initState,
  reducers: {
    dataFetching(state, action: PayloadAction<string>) {      
      state.isLoading = true;
      state.fetchUrl = action.payload;
    },
    dataFetchingSuccess(state, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.error = '';
      state.data = actions.payload;
    },
    dataFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default getMethodSlice.reducer;