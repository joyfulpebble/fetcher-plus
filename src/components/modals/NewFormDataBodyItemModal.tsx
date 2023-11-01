import useRequestBody, {
	type NewFormDataItemType
} from "../../widgets/workspace-widgets/RequestAdditionalOptions/RequestBody/hooks/useRequestBody";
import FileSelect from "../ui/FileSelect/FileSelect";
import Input from "../ui/Input/Input";
import Modal from "../ui/Modal/Modal";
import Select from "../ui/Select/Select";

interface NewFormDataBodyItemModalProps {
	view: boolean;
	setView: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewFormDataBodyItemModal = ({ view, setView }: NewFormDataBodyItemModalProps) => {
	const {
		formDataModalSubmitFunc,
		formDataFieldsValues,
		saveFormDataFieldsValue,
		formDataValueType,
		formDataValueTypeUpdate
	} = useRequestBody();

	return (
		<>
			<Modal
				title="Adding a new form-data body item"
				visibility={view}
				onSubmit={() => formDataModalSubmitFunc(formDataFieldsValues.current!, formDataValueType)}
				onCancel={() => true}
				onClose={() => setView(false)}
			>
				<div className="form_data_item_adding_modal">
					<div className="form_data_modal_item_key">
						<Input
							label="Enter form-data key:"
							placeholder="Some key..."
							onChange={(event) => {
								saveFormDataFieldsValue("key", event.target.value);
							}}
						/>
					</div>
					<div className="form_data_modal_item_value">
						<div>
							<Select
								data={["text", "file"]}
								onChange={(value) => {
									formDataValueTypeUpdate(value as NewFormDataItemType);
								}}
								title="Select form-data item value type:"
								placeholder="Type..."
								searchIcon={false}
								initValue={formDataValueType}
								disableSearch={true}
							/>
						</div>
						{formDataValueType === "text" ? (
							<div>
								<Input
									label="Enter form-data value:"
									placeholder="Some value..."
									onChange={(event) => {
										saveFormDataFieldsValue("value", event.target.value);
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

											saveFormDataFieldsValue("name", fileName);
											saveFormDataFieldsValue("blob", blobFromFile);
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

export default NewFormDataBodyItemModal;
