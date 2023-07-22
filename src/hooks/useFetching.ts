import { requestErrorSlice } from "../redux/reducers/requestErrorSlice";
import { useAppDispatch } from "./redux/redux";

import { AxiosError } from "axios";

export const useFetching = (callback: () => void): [() => void] => {
	const dispatch = useAppDispatch();
	const { addError } = requestErrorSlice.actions,
		fetch = async () => {
			try {
				await callback();
			} catch (e) {
				const err = e as AxiosError;

				dispatch(addError(JSON.stringify(err)));
			}
		};

	return [fetch];
};
