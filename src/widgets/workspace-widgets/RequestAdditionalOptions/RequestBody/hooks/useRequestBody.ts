import { useAppDispatch } from "../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../redux/reducers/requestBodyFormDataSlice";

import { v1 as uuidv1 } from "uuid";
import removeAllFiles from "../../../../../idb/actions/removeAllFiles";
import requestBodyUrlEncodedSlice from "../../../../../redux/reducers/requestBodyUrlEncodedSlice";

type NewUrlEncodedItemT = {
	keyRef: React.RefObject<HTMLInputElement>;
	valueRef: React.RefObject<HTMLInputElement>;
};

function useRequestBody() {
	const dispatch = useAppDispatch();
	const { clearFormData } = requestBodyFormDataSlice.actions;
	const { addUrlEncodedItem } = requestBodyUrlEncodedSlice.actions;

	const urlEncodedModalSubmitFunc = ({ keyRef, valueRef }: NewUrlEncodedItemT) => {
		dispatch(
			addUrlEncodedItem({
				_id: uuidv1(),
				isUsed: true,
				key: String(keyRef.current!.value),
				value: String(valueRef.current!.value)
			})
		);

		return true;
	};

	const clearFunctions = {
		"form-data": () => {
			dispatch(clearFormData());
			removeAllFiles();
		},
		"x-www-form-urlencoded": clearFormData,
		"raw": clearFormData // ?FIXME: Изменить на rawData
	};

	return {
		clearFunctions,
		urlEncodedModalSubmitFunc
	};
}

export default useRequestBody;
