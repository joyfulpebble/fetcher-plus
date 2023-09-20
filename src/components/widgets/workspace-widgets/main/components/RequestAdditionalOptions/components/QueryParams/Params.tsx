import { useState, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../../hooks/redux/redux";
import requestQueryParamsSlice from "../../../../../../../../redux/reducers/requestQueryParamsSlice";

import { ParamsList } from "./ParamsList";
import { ParamsEmptyList } from "./ParamsEmptyList";
import Modal from "../../../../../../../UI/Modal/Modal";
import Input from "../../../../../../../UI/Input/Input";
import { IconTrash, IconPlus } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";

import { v1 as uuidv1 } from "uuid";

import "./styles/Params.scss";
import "../../AdditionalOptions.scss";

export const Params = () => {
	const dispatch = useAppDispatch();
	const { addParameter, deleteAllParams } = requestQueryParamsSlice.actions;
	const queryParams = useAppSelector((state) => state.requestQueryParameters);

	const [newParameterModalView, setNewParameterModalView] = useState(false);
	const parameterNameRef = useRef<HTMLInputElement>(null);
	const parameterValueRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<Modal
				title="Adding a new query parameter"
				visibility={newParameterModalView}
				onCancel={() => true}
				onSubmit={() => {
					dispatch(
						addParameter({
							_id: uuidv1(),
							isUsed: true,
							key: String(parameterNameRef.current?.value),
							value: String(parameterValueRef.current?.value)
						})
					);

					return true;
				}}
				onClose={() => setNewParameterModalView(false)}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between"
					}}
				>
					<div>
						<Input
							name="parameterName"
							label="Enter parameter name:"
							placeholder="Some name..."
							maxLength={20}
							innerRef={parameterNameRef}
							onChange={() => {}}
						/>
					</div>
					<div>
						<Input
							name="parameterValue"
							label="Enter parameter value:"
							placeholder="Some value..."
							maxLength={20}
							error={""}
							innerRef={parameterValueRef}
							onChange={() => {}}
						/>
					</div>
				</div>
			</Modal>
			<section className="request_additional_option_header_wrapper">
				<span className="request_additional_option_name">Query Parameters</span>
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
									setNewParameterModalView(true);
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
									dispatch(deleteAllParams());
								}}
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section
				className={`${
					queryParams.length ? "query_params_body_wrapper" : "query_params_body_wrapper_empty"
				}`}
			>
				{queryParams.length ? (
					<ParamsList />
				) : (
					<ParamsEmptyList openModalFunc={setNewParameterModalView} />
				)}
			</section>
		</>
	);
};
