import { useState } from "react";
import { useForm } from "../../../../../hooks/useForm";

import { v1 as uuidv1 } from "uuid";
import loadFile from "../../../../../idb/actions/loadFile";

import { useAppDispatch } from "../../../../../hooks/redux/redux";
import requestBodyFormDataSlice from "../../../../../redux/reducers/requestBodyFormDataSlice";

export type NewFormDataItemType = "text" | "file";
export interface NewFormDataItemI {
	blob: Blob | null;
	name: string;
	key: string;
	value: string;
}

function useFormDataModal() {
	const dispatch = useAppDispatch();
	const { addBodyFormDataItem } = requestBodyFormDataSlice.actions;
	const { values, saveFuildValue } = useForm<NewFormDataItemI>({
		initialValues: { blob: null, name: "", key: "", value: "" }
	});
	const [valueType, setValueType] = useState<NewFormDataItemType>("text");

	const modalSubmitFunc = (itemData: NewFormDataItemI, itemType: NewFormDataItemType) => {
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

		saveFuildValue("value", "");
		saveFuildValue("name", "");
		saveFuildValue("key", "");
		saveFuildValue("blob", null);

		return true;
	};
	return {
		values,
		valueType,
		setValueType,
		modalSubmitFunc,
		saveFuildValue
	};
}

export default useFormDataModal;
