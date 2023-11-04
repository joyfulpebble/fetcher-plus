import FileSelect from "../../../ui/FileSelect/FileSelect";
import Input from "../../../ui/Input/Input";
import Modal from "../../../ui/Modal/Modal";
import Select from "../../../ui/Select/Select";
import useFormDataModal, { type NewFormDataItemType } from "./hooks/useFormDataModal";

interface NewFormDataItemModalProps {
	view: boolean;
	setView: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewFormDataItemModal = ({ view, setView }: NewFormDataItemModalProps) => {
	const { values, valueType, modalSubmitFunc, saveFuildValue, setValueType } = useFormDataModal();

	return (
		<>
			<Modal
				title="Adding a new form-data body item"
				visibility={view}
				onSubmit={() => modalSubmitFunc(values.current!, valueType)}
				onCancel={() => true}
				onClose={() => setView(false)}
			>
				<div className="form_data_item_adding_modal">
					<div className="form_data_modal_item_key">
						<Input
							label="Enter form-data key:"
							placeholder="Some key..."
							onChange={(event) => {
								saveFuildValue("key", event.target.value);
							}}
						/>
					</div>
					<div className="form_data_modal_item_value">
						<div>
							<Select
								data={["text", "file"]}
								onChange={(value) => {
									setValueType(value as NewFormDataItemType);
								}}
								title="Select form-data item value type:"
								placeholder="Type..."
								searchIcon={false}
								initValue={valueType}
								disableSearch={true}
							/>
						</div>
						{valueType === "text" ? (
							<div>
								<Input
									label="Enter form-data value:"
									placeholder="Some value..."
									onChange={(event) => {
										saveFuildValue("value", event.target.value);
									}}
								/>
							</div>
						) : (
							<div className="form_data_modal_select_file">
								<FileSelect
									placeholder="Click to upload file"
									onChange={async (event) => {
										if (event.target.files && event.target.files.length != 0) {
											const tempUrlToFile = URL.createObjectURL(event.target.files[0]);
											const blobFromFile = await fetch(tempUrlToFile).then((res) => res.blob());
											const fileName: string = event.target.files[0].name;

											saveFuildValue("name", fileName);
											saveFuildValue("blob", blobFromFile);
										}
									}}
								/>
							</div>
						)}
					</div>
				</div>
			</Modal>
		</>
	);
};

export default NewFormDataItemModal;
