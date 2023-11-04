import { useRef, useState, useEffect } from "react";

import requestHeadersSlice from "../../../redux/reducers/requestHeadersSlice";

import Input from "../../ui/Input/Input";
import Modal from "../../ui/Modal/Modal";
import Select from "../../ui/Select/Select";

import { v1 as uuidv1 } from "uuid";
import { defaultRequestHeaders } from "../../../tools/constants";
import { useAppDispatch } from "../../../hooks/redux/redux";

interface NewRequestHeaderModalProps {
	view: boolean;
	setView: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewRequestHeaderModal = ({ view, setView }: NewRequestHeaderModalProps) => {
	const [selectedHeader, setSelectedHeader] = useState<string>("");

	const newHeaderValueRef = useRef<HTMLInputElement>(null);
	const { addHeader } = requestHeadersSlice.actions;

	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!view) setSelectedHeader("");
	}, [view]);

	return (
		<>
			<Modal
				title="Adding a new header"
				subtitle="Choose from existing ones or enter your own."
				visibility={view}
				onCancel={() => true}
				onSubmit={() => {
					dispatch(
						addHeader({
							_id: uuidv1(),
							isUsed: true,
							key: selectedHeader,
							value: String(newHeaderValueRef.current?.value)
						})
					);

					return true;
				}}
				onClose={() => setView(false)}
			>
				<div className="header_adding_modal">
					<div>
						<Select
							title="Select or enter header name:"
							placeholder="Header name..."
							searchIcon={false}
							data={defaultRequestHeaders}
							initValue={selectedHeader}
							onChange={(newValue) => {
								setSelectedHeader(newValue);
							}}
							disableSearch={false}
							itemsInView={4}
						/>
					</div>
					<div>
						<Input
							label="Enter header value:"
							placeholder="Header value..."
							innerRef={newHeaderValueRef}
						/>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default NewRequestHeaderModal;
