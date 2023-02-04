import { statusErrorSlice } from "../../redux/reducers/statusErrorSlice";
import { useAppDispatch } from "../redux/redux";

import { AxiosError } from "axios";

export const useFetching = (callback: () => void): [ () => void ] => {
  const dispatch = useAppDispatch();
  const { addError } = statusErrorSlice.actions;

  const fetching = async () => {
    try {
      await callback();
    } catch (e) {
      const err = e as AxiosError;    
      
      dispatch(
        addError(JSON.stringify(err))
      )  
    }
  }
  
  return [ fetching ];
}