import useUrlEncodedModal from "./hooks/useUrlEncodedModal";

import Input from "../../../ui/Input/Input";
import Modal from "../../../ui/Modal/Modal";

interface NewFormDataItemModalProps {
	view: boolean;
	setView: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewUrlEncodedItemModal = ({ view, setView }: NewFormDataItemModalProps) => {
	const { values, saveFuildValue, modalSubmitFunc } = useUrlEncodedModal();

	return (
		<>
			<Modal
				title="Adding a new url-encoded body item"
				visibility={view}
				onSubmit={() => modalSubmitFunc({ key: values.current!.key, value: values.current!.value })}
				onCancel={() => true}
				onClose={() => setView(false)}
			>
				<div className="url_encoded_item_adding_modal">
					<div className="url_encoded_modal_item_key">
						<Input
							label="Enter form-data key:"
							placeholder="Some key..."
							onChange={(event) => {
								saveFuildValue("key", event.target.value);
							}}
						/>
					</div>
					<div className="url_encoded_modal_item_value">
						<div>
							<Input
								label="Enter form-data value:"
								placeholder="Some value..."
								onChange={(event) => {
									saveFuildValue("value", event.target.value);
								}}
							/>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default NewUrlEncodedItemModal;
