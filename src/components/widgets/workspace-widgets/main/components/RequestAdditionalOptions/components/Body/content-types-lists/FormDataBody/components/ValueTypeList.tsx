import { IconCheck } from "@tabler/icons-react";

import { useAppDispatch } from "../../../../../../../../../../../hooks/redux/redux";
import requestBodyFormDataSlice, {
	type BodyFormDataItem
} from "../../../../../../../../../../../redux/reducers/requestBodyFormDataSlice";

import "../../../styles/FormDataListItem.scss";

interface ValueTypeListProps {
	item: BodyFormDataItem;
}

export const ValueTypeList = ({ item }: ValueTypeListProps) => {
	const dispatch = useAppDispatch();
	const { updateFormDataValueType, updateFormDataValue } = requestBodyFormDataSlice.actions;

	return (
		<div className="form_data_value_type_list">
			<div
				className={`form_data_type_item ${item.valueType.toLowerCase() === "text" && "selected"}`}
				onClick={() => {
					dispatch(
						updateFormDataValueType({
							formDataID: item._id,
							type: "text"
						})
					);
					dispatch(
						updateFormDataValue({
							formDataID: item._id,
							newValue: ""
						})
					);

					const idbRequest = indexedDB.open("request-body-files", 1);

					idbRequest.onsuccess = () => {
						const db = idbRequest.result;
						const tx = db.transaction("files", "readwrite");
						const filesStore = tx.objectStore("files");

						const deletingFile = filesStore.delete(item.value);

						deletingFile.onsuccess = () => {
							tx.oncomplete = () => {
								db.close();
							};
						};
					};
				}}
			>
				<span>Text</span>
				{item.valueType.toLowerCase() === "text" && <IconCheck size={14} />}
			</div>
			<div
				className={`form_data_type_item ${item.valueType.toLowerCase() === "file" && "selected"}`}
				onClick={() => {
					dispatch(
						updateFormDataValueType({
							formDataID: item._id,
							type: "file"
						})
					);
					dispatch(
						updateFormDataValue({
							formDataID: item._id,
							newValue: ""
						})
					);
				}}
			>
				<span>File</span>
				{item.valueType.toLowerCase() === "file" && <IconCheck size={14} />}
			</div>
		</div>
	);
};
