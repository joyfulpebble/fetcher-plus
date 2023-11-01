import { useState } from "react";
import { useAppDispatch } from "../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../redux/reducers/requestBodyFormDataSlice";

import { v1 as uuidv1 } from "uuid";
import loadFile from "../../../../../idb/actions/loadFile";
import removeAllFiles from "../../../../../idb/actions/removeAllFiles";
import requestBodyUrlEncodedSlice from "../../../../../redux/reducers/requestBodyUrlEncodedSlice";
import { useForm } from "../../../../../hooks/useForm";

export type NewFormDataItemType = "text" | "file";
export interface NewFormDataItemI {
	blob: Blob | null;
	name: string | null;
	key: string;
	value: string;
}
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

	const { values, saveFuildValue } = useForm<NewFormDataItemI>({
		initialValues: { blob: null, name: null, key: "", value: "asd" }
	});
	const [valueType, setValueType] = useState<NewFormDataItemType>("text");

	const formDataModalSubmitFunc = (itemData: NewFormDataItemI, itemType: NewFormDataItemType) => {
		const fileId: string = uuidv1();

		if (itemType === "file") {
			if (itemData.blob && itemData.name) {
				loadFile({
					id: fileId,
					name: itemData.name,
					blob: itemData.blob
				});
				dispatch(
					addBodyFormDataItem({
						_id: uuidv1(),
						isUsed: true,
						valueType: "file",
						value: "",
						key: itemData.key,
						fileInfo: {
							id: fileId,
							name: itemData.name
						}
					})
				);
			} else {
				dispatch(
					addBodyFormDataItem({
						_id: uuidv1(),
						isUsed: true,
						valueType: "file",
						value: "",
						key: itemData.key,
						fileInfo: {
							id: "",
							name: ""
						}
					})
				);
			}
		} else {
			dispatch(
				addBodyFormDataItem({
					_id: uuidv1(),
					isUsed: true,
					valueType: "text",
					value: itemData.value,
					key: itemData.key,
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
		"x-www-form-urlencoded": clearFormData,
		"raw": clearFormData // ?FIXME: Изменить на rawData
	};

	return {
		formDataFieldsValues: values,
		formDataValueType: valueType,
		formDataValueTypeUpdate: setValueType,
		formDataModalSubmitFunc,
		saveFormDataFieldsValue: saveFuildValue,
		clearFunctions,
		urlEncodedModalSubmitFunc
	};
}

export default useRequestBody;
