import { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux/redux";
import { useClassnames } from "../../../../hooks/useClassnames";
import useRequestBody from "./hooks/useRequestBody";

import BodyNone from "./RequestBodyNone";
import FormDataList from "../../../../components/request-body-variants/FormData/FormDataList";
import RequestBodyContentTypesList from "../../../../components/lists/RequestBodyContentTypesList/RequestBodyContentTypesList";
import RequestBodyRawTypesList from "../../../../components/lists/RequestBodyRawTypesList/RequestBodyRawTypesList";

import Modal from "../../../../components/ui/Modal/Modal";
import Input from "../../../../components/ui/Input/Input";
import FileSelect from "../../../../components/ui/FileSelect/FileSelect";
import Select from "../../../../components/ui/Select/Select";

import { IconChevronDown, IconFilePlus, IconPlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";

import { v1 as uuidv1, v1 } from "uuid";

import "./styles/RequestBody.scss";
import "./styles/RequestBodyNone.scss";
import requestBodyUrlEncodedSlice from "../../../../redux/reducers/requestBodyUrlEncodedSlice";
import UrlEncodedList from "../../../../components/request-body-variants/UrlEncoded/UrlEncodedList";

const RequestBody = () => {
	// !FIXME: Logic of modal elements -----------------------------------------------------------------------

	const [newFormDataModalView, setNewFormDataModalView] = useState(false);
	const [newFormDataItem, setNewFormDataItem] = useState<{
		name: string | undefined;
		blob: Blob | undefined;
	}>({
		name: undefined,
		blob: undefined
	});
	const [newFormDataItemType, setNewFormDataItemType] = useState<string>("Text");

	const formDataItemKeyRef = useRef<HTMLInputElement>(null);
	const formDataItemValueRef = useRef<HTMLInputElement>(null);

	// !FIXME: -----------------------------------------------------------------------------------------------

	const [newUrlEncodedModalView, setNewUrlEncodedModalView] = useState(false);

	const urlEncodedKeyRef = useRef<HTMLInputElement>(null);
	const urlEncodedValueRef = useRef<HTMLInputElement>(null);

	// !FIXME: -----------------------------------------------------------------------------------------------

	const { urlEncodedModalSubmitFunc, formDataModalSubmitFunc, clearFunctions } = useRequestBody();

	const { contentType, rawType } = useAppSelector((state) => state.requestBodyTypeReducer);

	const request_body_classnames = useClassnames({
		request_body_none_wrapper: contentType === "none",
		request_body_wrapper: contentType !== "none"
	});

	const body_variants = {
		"none": <BodyNone />,
		"form-data": <FormDataList modalFunc={setNewFormDataModalView} />,
		"x-www-form-urlencoded": <UrlEncodedList modalFunc={setNewUrlEncodedModalView} />,
		"raw": <>raw</>
	};

	return (
		<>
			{/* FIXME: */}
			<Modal
				title="Adding a new url-encoded body item"
				visibility={newUrlEncodedModalView}
				onSubmit={() =>
					urlEncodedModalSubmitFunc({ keyRef: urlEncodedKeyRef, valueRef: urlEncodedValueRef })
				}
				onCancel={() => true}
				onClose={() => setNewUrlEncodedModalView(false)}
			>
				<div className="url_encoded_item_adding_modal">
					<div className="url_encoded_modal_item_key">
						<Input
							label="Enter form-data key:"
							placeholder="Some key..."
							innerRef={urlEncodedKeyRef}
						/>
					</div>
					<div className="url_encoded_modal_item_value">
						<div>
							<Input
								label="Enter form-data value:"
								placeholder="Some value..."
								innerRef={urlEncodedValueRef}
							/>
						</div>
					</div>
				</div>
			</Modal>
			<Modal
				title="Adding a new form-data body item"
				visibility={newFormDataModalView}
				onSubmit={() =>
					formDataModalSubmitFunc({
						type: newFormDataItemType,
						blob: newFormDataItem!.blob,
						name: newFormDataItem!.name,
						keyRef: formDataItemKeyRef,
						valueRef: formDataItemValueRef
					})
				}
				onCancel={() => true}
				onClose={() => setNewFormDataModalView(false)}
			>
				<div className="form_data_item_adding_modal">
					<div className="form_data_modal_item_key">
						<Input
							label="Enter form-data key:"
							placeholder="Some key..."
							innerRef={formDataItemKeyRef}
						/>
					</div>
					<div className="form_data_modal_item_value">
						<div>
							<Select
								data={["Text", "File"]}
								onChange={(value) => {
									setNewFormDataItemType(value);
								}}
								title="Select form-data item value type:"
								placeholder="Type..."
								searchIcon={false}
								initValue={newFormDataItemType!}
								disableSearch={true}
							/>
						</div>
						{newFormDataItemType === "Text" ? (
							<div>
								<Input
									label="Enter form-data value:"
									placeholder="Some value..."
									innerRef={formDataItemValueRef}
								/>
							</div>
						) : (
							<div className="form_data_modal_select_file">
								<FileSelect
									placeholder="Click to upload file"
									onChange={async (event) => {
										const fileName: string = event.target.files![0].name;
										const tempUrlToFile = URL.createObjectURL(event.target.files![0]);
										const blobFromFile = await fetch(tempUrlToFile).then((res) => res.blob());

										setNewFormDataItem({
											name: fileName,
											blob: blobFromFile
										});
									}}
								/>
							</div>
						)}
					</div>
				</div>
			</Modal>
			{/* FIXME: */}
			<section className="request_additional_option_header_wrapper">
				<div className="body_conntent_type_select_wrapper">
					<span className="request_additional_option_name">Body</span>
					<div className="request_additional_body_type">
						<Tippy
							className="default_tippy body_content_type_tippy_wrapper"
							placement="bottom"
							content={<RequestBodyContentTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[49, 5]}
						>
							<div className="body_content_type_select">
								<span className="body_content_type">{contentType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					</div>
					{contentType === "raw" && (
						<Tippy
							className="default_tippy body_raw_type_tippy_wrapper"
							placement="bottom"
							content={<RequestBodyRawTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[15, 5]}
						>
							<div className="body_raw_type_select">
								<span className="body_raw_type">{rawType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					)}
				</div>
				<div className="request_additional_option_controls">
					{/* FIXME: */}
					{contentType === "raw" && (
						<div className="add_new">
							<Tippy
								className="info_tippy"
								placement="top"
								content={"Import"}
								animation="shift-away"
								arrow={true}
								trigger="mouseenter"
								zIndex={0}
							>
								<IconFilePlus
									size={16}
									stroke={2}
								/>
							</Tippy>
						</div>
					)}
					{contentType === "x-www-form-urlencoded" && (
						<div className="add_new">
							<Tippy
								className="info_tippy"
								placement="top"
								content={"Add new"}
								animation="shift-away"
								arrow={true}
								trigger="mouseenter"
								zIndex={0}
							>
								<IconPlus
									size={16}
									onClick={() => {
										setNewUrlEncodedModalView(true);
									}}
								/>
							</Tippy>
						</div>
					)}
					{contentType === "form-data" && (
						<div className="add_new">
							<Tippy
								className="info_tippy"
								placement="top"
								content={"Add new"}
								animation="shift-away"
								arrow={true}
								trigger="mouseenter"
								zIndex={0}
							>
								<IconPlus
									size={16}
									onClick={() => {
										setNewFormDataModalView(true);
									}}
								/>
							</Tippy>
						</div>
					)}
					{contentType !== "none" && (
						<div className="delete_all">
							<Tippy
								className="info_tippy"
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
										clearFunctions[contentType]();
									}}
								/>
							</Tippy>
						</div>
					)}
					{/* FIXME: */}
				</div>
			</section>
			<section className={request_body_classnames}>{body_variants[contentType]}</section>
		</>
	);
};

export default RequestBody;
