import { IconCheck } from "@tabler/icons-react";

import removeFile from "../../../idb/actions/removeFile";

import { useAppDispatch } from "../../../hooks/redux/redux";
import requestBodyFormDataSlice, {
	type BodyFormDataItem
} from "../../../redux/reducers/requestBodyFormDataSlice";

import "./RequestFormDataValueTypeList.scss";

interface RequestFormDataValueTypeListProps {
	item: BodyFormDataItem;
}

const RequestFormDataValueTypeList = ({ item }: RequestFormDataValueTypeListProps) => {
	const dispatch = useAppDispatch();
	const { updateFormDataValueType, updateFormDataValue, updateFormDataFileInfo } =
		requestBodyFormDataSlice.actions;

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
						updateFormDataFileInfo({
							id: item._id,
							value: {
								id: "",
								name: ""
							}
						})
					);

					removeFile(item.fileInfo.id);
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
							value: ""
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

export default RequestFormDataValueTypeList;
