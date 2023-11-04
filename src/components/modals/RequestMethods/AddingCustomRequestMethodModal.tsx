import Input from "../../ui/Input/Input";
import Modal from "../../ui/Modal/Modal";

import useAddingRequestMethodModal from "./hooks/useAddingRequestMethodModal";

interface AddingCustomRequestMethodModalProps {
	view: boolean;
	setView: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddingCustomRequestMethodModal = ({ view, setView }: AddingCustomRequestMethodModalProps) => {
	const { methodNameRef, inputError, setInputError, modalSubmitFunc, changeFunction } =
		useAddingRequestMethodModal();

	return (
		<>
			<Modal
				title="Adding a custom request name"
				visibility={view}
				onSubmit={() => modalSubmitFunc()}
				onCancel={() => true}
				onClose={() => {
					setInputError(null);
					setView(false);
				}}
			>
				<Input
					name="requestName"
					label="Enter request name: "
					placeholder="Some text"
					maxLength={20}
					innerRef={methodNameRef}
					error={inputError}
					onChange={() => changeFunction()}
					onKeyDown={(event) => {
						if (event.code === "Space") event.preventDefault();
					}}
				/>
			</Modal>
		</>
	);
};

export default AddingCustomRequestMethodModal;
