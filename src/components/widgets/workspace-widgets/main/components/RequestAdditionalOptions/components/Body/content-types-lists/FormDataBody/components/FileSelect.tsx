import { IconPlus } from "@tabler/icons-react";

import { useAppDispatch } from "../../../../../../../../../../../hooks/redux/redux";
import requestBodyFormDataSlice, {
	type BodyFormDataItem
} from "../../../../../../../../../../../redux/reducers/requestBodyFormDataSlice";

import { v1 as uuidv1 } from "uuid";

import "../../../styles/FormDataListItem.scss";

interface FileSelectProps {
	item: BodyFormDataItem;
	setFunc: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FileSelect = ({ item, setFunc }: FileSelectProps) => {
	const dispatch = useAppDispatch();
	const { updateFormDataValue } = requestBodyFormDataSlice.actions;

	return (
		<label>
			<div className="form_data_file_add_button">
				<IconPlus size={16} />
			</div>
			<input
				type="file"
				onChange={async (event) => {
					const fileId: string = uuidv1();
					const fileName: string = event.target.files![0].name;
					const tempUrlToFile = URL.createObjectURL(event.target.files![0]);
					const blobFromFile = await fetch(tempUrlToFile).then((res) => res.blob());

					setFunc(fileName);

					const idbRequest = indexedDB.open("request-body-files", 1);
					idbRequest.onsuccess = () => {
						const db = idbRequest.result;
						const tx = db.transaction("files", "readwrite");
						const filesStore = tx.objectStore("files");

						const newFile = filesStore.put({
							id: fileId,
							name: fileName,
							blob: blobFromFile
						});

						newFile.onsuccess = () => {
							tx.oncomplete = () => {
								db.close();
							};
						};
					};

					dispatch(
						updateFormDataValue({
							formDataID: item._id,
							newValue: fileId
						})
					);
				}}
			/>
		</label>
	);
};
