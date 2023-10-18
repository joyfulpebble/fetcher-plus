import { useAppDispatch } from "../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../redux/reducers/requestBodyFormDataSlice";

import { v1 as uuidv1 } from "uuid";
import loadFile from "../../../../../idb/actions/loadFile";
import removeAllFiles from "../../../../../idb/actions/removeAllFiles";

type NewItemT = null | {
	id: string;
	name: string;
	blob: Blob;
};

function useRequestBody(
	keyInputRef: React.RefObject<HTMLInputElement>,
	valueInputRef: React.RefObject<HTMLInputElement>,
	newItem: NewItemT
) {
	const dispatch = useAppDispatch();
	const { addBodyFormDataItem, clearFormData } = requestBodyFormDataSlice.actions;

	const modalSubmitFunc = () => {
		if (!!newItem) {
			loadFile({
				id: newItem.id,
				name: newItem.name,
				blob: newItem.blob
			});
			dispatch(
				addBodyFormDataItem({
					_id: uuidv1(),
					isUsed: true,
					valueType: "file",
					value: "",
					key: keyInputRef.current!.value,
					fileInfo: {
						id: newItem.id,
						name: newItem.name
					}
				})
			);
		} else {
			dispatch(
				addBodyFormDataItem({
					_id: uuidv1(),
					isUsed: true,
					valueType: "text",
					value: valueInputRef.current!.value,
					key: keyInputRef.current!.value,
					fileInfo: {
						id: "",
						name: ""
					}
				})
			);
		}
		return true;
	};

	const clearFunctions = {
		"form-data": () => {
			dispatch(clearFormData());
			removeAllFiles();
		},
		"x-www-form-urlencoded": clearFormData, // ?FIXME: Изменить на urlencodedData
		"raw": clearFormData // ?FIXME: Изменить на rawData
	};

	return { clearFunctions, modalSubmitFunc };
}

export default useRequestBody;
