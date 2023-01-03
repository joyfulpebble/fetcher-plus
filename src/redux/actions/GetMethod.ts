import  Service  from "../../API/Service";
import { getMethodSlice } from '../reducers/GetMethodSlice'
import { AppDispatch } from "../store";

export const getMethod = (url: string, params: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getMethodSlice.actions.dataFetching(url));

    const response = await Service.GET(url, params);

    dispatch(getMethodSlice.actions.dataFetchingSuccess(JSON.stringify(response)));
    
  } catch (error) {
    dispatch(getMethodSlice.actions.dataFetchingError(`${error}`));
  }
}