import { useAppDispatch } from "../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../redux/reducers/requestBodyFormDataSlice";

import removeAllFiles from "../../../../../idb/actions/removeAllFiles";
import requestBodyUrlEncodedSlice from "../../../../../redux/reducers/requestBodyUrlEncodedSlice";
import requestBodyRawContentSlice from "../../../../../redux/reducers/requestBodyRawContentSlice";

function useRequestBody() {
	const dispatch = useAppDispatch();
	const { clearFormData } = requestBodyFormDataSlice.actions;
	const { clearUrlEncoded } = requestBodyUrlEncodedSlice.actions;
	const { clearRawContent } = requestBodyRawContentSlice.actions;

	const clearFunctions = {
		"form-data": () => {
			dispatch(clearFormData());
			removeAllFiles();
		},
		"x-www-form-urlencoded": () => dispatch(clearUrlEncoded()),
		"raw": () => dispatch(clearRawContent())
	};

	return {
		clearFunctions
	};
}

export default useRequestBody;
