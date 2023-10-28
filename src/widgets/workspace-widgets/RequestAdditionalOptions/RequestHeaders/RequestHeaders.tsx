import { useState, useRef, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../..//hooks/redux/redux";
import requestHeadersSlice from "../../../../redux/reducers/requestHeadersSlice";

import { defaultRequestHeaders } from "../../../../tools/constants";

import Input from "../../../../components/ui/Input/Input";

import { IconPlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import Modal from "../../../../components/ui/Modal/Modal";
import Select from "../../../../components/ui/Select/Select";

import { v1 as uuidv1 } from "uuid";
import "./styles/RequestHeaders.scss";
import HeadersList from "./RequestHeadersList";
import HeadersEmptyList from "./RequestHeadersEmptyList";

const RequestHeaders = () => {
	const [newHeaderModalView, setNewHeaderModalView] = useState(false);
	const [selectedHeader, setSelectedHeader] = useState<string>("");

	const newHeaderValueRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();
	const { addHeader, deleteAllHeaders } = requestHeadersSlice.actions;
	const headers = useAppSelector((state) => state.requestHeadersSlice);

	useEffect(() => {
		if (!newHeaderModalView) setSelectedHeader("");
	}, [newHeaderModalView]);

	return (
		<>
			<Modal
				title="Adding a new header"
				subtitle="Choose from existing ones or enter your own."
				visibility={newHeaderModalView}
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
				onClose={() => setNewHeaderModalView(false)}
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
			<section className="request_additional_option_header_wrapper">
				<span className="request_additional_option_name">Headers</span>
				<div className="request_additional_option_controls">
					<div className="add_new">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Add new"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
						>
							<IconPlus
								size={16}
								stroke={2}
								onClick={() => {
									setNewHeaderModalView(true);
								}}
							/>
						</Tippy>
					</div>
					<div className="delete_all">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Clear all"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
							offset={[-15, 10]}
						>
							<IconTrash
								size={16}
								stroke={2}
								onClick={() => {
									dispatch(deleteAllHeaders());
								}}
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section
				className={`${headers.length ? "headers_body_wrapper" : "headers_body_wrapper_empty"}`}
			>
				{headers.length ? (
					<HeadersList />
				) : (
					<HeadersEmptyList openModalFunc={setNewHeaderModalView} />
				)}
			</section>
		</>
	);
};

export default RequestHeaders;
