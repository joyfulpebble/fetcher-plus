import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../..//hooks/redux/redux";
import requestHeadersSlice from "../../../../redux/reducers/requestHeadersSlice";

import { IconPlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";

import HeadersList from "./RequestHeadersList";
import HeadersEmptyList from "./RequestHeadersEmptyList";
import NewRequestHeaderModal from "../../../../components/modals/RequestHeaders/NewRequestHeaderModal";

import "./styles/RequestHeaders.scss";

const RequestHeaders = () => {
	const [newHeaderModalView, setNewHeaderModalView] = useState(false);

	const dispatch = useAppDispatch();
	const { deleteAllHeaders } = requestHeadersSlice.actions;
	const headers = useAppSelector((state) => state.requestHeadersSlice);

	return (
		<>
			<NewRequestHeaderModal
				view={newHeaderModalView}
				setView={setNewHeaderModalView}
			/>
			<section className="request_additional_option_header_wrapper">
				<span className="request_additional_option_name">Headers</span>
				<div className="request_additional_option_controls">
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
								stroke={2}
								onClick={() => {
									setNewHeaderModalView(true);
								}}
							/>
						</Tippy>
					</div>
					<div className="delete_all">
						<Tippy
							className="info_tippy"
							placement="top"
							content={"Delete all"}
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
