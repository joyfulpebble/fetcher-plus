import { AxiosError } from "axios";
import { statusErrorSlice } from "../../redux/reducers/StatusErrorSlice";
import { useAppDispatch } from "../redux/redux";

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