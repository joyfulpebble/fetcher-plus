import { useState } from "react";
import { useAppSelector } from "../../../../hooks/redux/redux";
import { useClassnames } from "../../../../hooks/useClassnames";
import useRequestBody from "./hooks/useRequestBody";

import BodyNone from "./RequestBodyNone";
import FormDataList from "../../../../components/request-body-variants/FormData/FormDataList";
import UrlEncodedList from "../../../../components/request-body-variants/UrlEncoded/UrlEncodedList";
import RequestBodyRawTypesList from "../../../../components/lists/RequestBodyRawTypesList/RequestBodyRawTypesList";
import RequestBodyContentTypesList from "../../../../components/lists/RequestBodyContentTypesList/RequestBodyContentTypesList";
import NewFormDataItemModal from "../../../../components/modals/RequestBody/FormDataItemModal/NewFormDataItemModal";
import NewUrlEncodedItemModal from "../../../../components/modals/RequestBody/UrlEncodedItemModal/NewUrlEncodedItemModal";
import RawBodyImport from "../../../../components/request-body-variants/Raw/RawBodyImport";
import CustomEditor from "../../../../components/request-body-variants/Raw/CustomEditor";

import { IconChevronDown, IconPlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";

import "./styles/RequestBody.scss";
import "./styles/RequestBodyNone.scss";

const RequestBody = () => {
	const { clearFunctions } = useRequestBody();
	const [urlEncodedModalView, setUrlEncodedModalView] = useState(false);
	const [formDataModalView, setFormDataModalView] = useState(false);

	const { contentType, rawType } = useAppSelector((state) => state.requestBodyTypeReducer);

	const request_body_classnames = useClassnames({
		request_body_none_wrapper: contentType === "none",
		request_body_wrapper: contentType !== "none"
	});

	const body_variants = {
		"none": <BodyNone />,
		"form-data": <FormDataList modalFunc={setFormDataModalView} />,
		"x-www-form-urlencoded": <UrlEncodedList modalFunc={setUrlEncodedModalView} />,
		"raw": <CustomEditor />
	};

	return (
		<>
			<NewUrlEncodedItemModal
				view={urlEncodedModalView}
				setView={setUrlEncodedModalView}
			/>
			<NewFormDataItemModal
				view={formDataModalView}
				setView={setFormDataModalView}
			/>
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
					{contentType === "raw" && (
						<Tippy
							className="info_tippy"
							placement="top"
							content={"Import"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
							offset={[0, 7]}
						>
							<div className="add_new">
								<RawBodyImport />
							</div>
						</Tippy>
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
										setUrlEncodedModalView(true);
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
										setFormDataModalView(true);
									}}
								/>
							</Tippy>
						</div>
					)}
					{contentType !== "none" && (
						<Tippy
							className="info_tippy"
							placement="top"
							content={"Clear current"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
							offset={[-30, 7]}
						>
							<div className="delete_all">
								<IconTrash
									size={16}
									stroke={2}
									onClick={() => {
										clearFunctions[contentType]();
									}}
								/>
							</div>
						</Tippy>
					)}
				</div>
			</section>
			<section className={request_body_classnames}>{body_variants[contentType]}</section>
		</>
	);
};

export default RequestBody;
