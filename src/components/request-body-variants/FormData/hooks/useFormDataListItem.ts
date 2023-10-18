import { useAppDispatch } from "../../../../hooks/redux/redux";
import requestBodyFormDataSlice, {
	type BodyFormDataItem
} from "../../../../redux/reducers/requestBodyFormDataSlice";
import loadFile from "../../../../idb/actions/loadFile";
import removeFile from "../../../../idb/actions/removeFile";
import { v1 as uuidv1 } from "uuid";

export const useFormDataListItem = (item: BodyFormDataItem) => {
	const dispatch = useAppDispatch();
	const {
		updateFormDataState,
		updateFormDataKey,
		updateFormDataValue,
		updateFormDataFileInfo,
		deleteFormData
	} = requestBodyFormDataSlice.actions;

	const updateFormDataItemState = () => {
		dispatch(updateFormDataState(item._id));
	};

	const updateFormDataItemKeyFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			updateFormDataKey({
				formDataID: item._id,
				key: event.target.value
			})
		);
	};

	const updateFormDataItemValueFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			updateFormDataValue({
				formDataID: item._id,
				value: event.target.value
			})
		);
	};

	const removeFileFromItemValueFunc = () => {
		removeFile(item.fileInfo.id);
		dispatch(
			updateFormDataValue({
				formDataID: item._id,
				value: ""
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
	};

	const fileSelectFunc = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const fileId: string = uuidv1();
		const fileName: string = event.target.files![0].name;
		const tempUrlToFile = URL.createObjectURL(event.target.files![0]);
		const blobFromFile = await fetch(tempUrlToFile).then((res) => res.blob());

		loadFile({
			id: fileId,
			name: fileName,
			blob: blobFromFile
		});

		dispatch(
			updateFormDataFileInfo({
				id: item._id,
				value: {
					id: fileId,
					name: fileName
				}
			})
		);
	};

	const deletFormDataItemFunc = () => {
		dispatch(deleteFormData(item._id));
		if (item.valueType === "file") removeFile(item.fileInfo.id);
	};

	return {
		updateFormDataItemState,
		updateFormDataItemKeyFunc,
		updateFormDataItemValueFunc,
		removeFileFromItemValueFunc,
		fileSelectFunc,
		deletFormDataItemFunc
	};
};
