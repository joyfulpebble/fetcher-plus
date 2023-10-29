import { useAppDispatch } from "../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../redux/reducers/requestBodyFormDataSlice";

import { v1 as uuidv1 } from "uuid";
import loadFile from "../../../../../idb/actions/loadFile";
import removeAllFiles from "../../../../../idb/actions/removeAllFiles";
import requestBodyUrlEncodedSlice from "../../../../../redux/reducers/requestBodyUrlEncodedSlice";

type NewFormDataItemT = {
	type: string;
	blob: Blob | undefined;
	name: string | undefined;
	keyRef: React.RefObject<HTMLInputElement>;
	valueRef: React.RefObject<HTMLInputElement>;
};
type NewUrlEncodedItemT = {
	keyRef: React.RefObject<HTMLInputElement>;
	valueRef: React.RefObject<HTMLInputElement>;
};

function useRequestBody() {
	const dispatch = useAppDispatch();
	const { addBodyFormDataItem, clearFormData } = requestBodyFormDataSlice.actions;
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

	const formDataModalSubmitFunc = ({ type, blob, keyRef, name, valueRef }: NewFormDataItemT) => {
		if (type === "File") {
			if (blob && name) {
				const fileId: string = uuidv1();
				loadFile({
					id: fileId,
					name: name,
					blob: blob
				});
				dispatch(
					addBodyFormDataItem({
						_id: uuidv1(),
						isUsed: true,
						valueType: "file",
						value: "",
						key: keyRef.current!.value,
						fileInfo: {
							id: fileId,
							name: name
						}
					})
				);
			}
			dispatch(
				addBodyFormDataItem({
					_id: uuidv1(),
					isUsed: true,
					valueType: "file",
					value: "",
					key: keyRef.current!.value,
					fileInfo: {
						id: "",
						name: ""
					}
				})
			);
		} else {
			dispatch(
				addBodyFormDataItem({
					_id: uuidv1(),
					isUsed: true,
					valueType: "text",
					value: valueRef.current!.value,
					key: keyRef.current!.value,
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

	return { clearFunctions, formDataModalSubmitFunc, urlEncodedModalSubmitFunc };
}

export default useRequestBody;
