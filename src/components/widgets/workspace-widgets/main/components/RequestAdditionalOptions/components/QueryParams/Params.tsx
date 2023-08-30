import { useState, useRef } from "react";

import { useAppDispatch } from "../../../../../../../../hooks/redux/redux";

import { ParamsList } from "./ParamsList";
import Modal from "../../../../../../../UI/Modal/Modal";
import Input from "../../../../../../../UI/Input/Input";
import { IconTrash, IconPlus } from "@tabler/icons-react";

import "./QueryParams.scss";
import requestQueryParamsSlice from "../../../../../../../../redux/reducers/requestQueryParamsSlice";

export const Params = () => {
	const dispatch = useAppDispatch();
	const { addParameter, deleteAllParams } = requestQueryParamsSlice.actions;

	const [newParameterModalView, setNewParameterModalView] = useState(false);
	const parameterNameRef = useRef<HTMLInputElement>(null);
	const parameterValueRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<Modal
				title="New query parameter"
				visibility={newParameterModalView}
				onCancel={() => true}
				onSubmit={() => {
					const query_parameter_key = parameterNameRef.current?.value!;
					const query_parameter_value = parameterValueRef.current?.value!;

					dispatch(
						addParameter({
							isUsed: true,
							parameterKey: query_parameter_key,
							parameterValue: query_parameter_value
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
			<section className="query_params_header_wrapper">
				<span className="additional_option_name">Query Parameters</span>
				<div className="additional_option_controls">
					<div className="add_new_param">
						<IconPlus
							size={16}
							stroke={2}
							onClick={() => {
								setNewParameterModalView(true);
							}}
						/>
					</div>
					<div className="delete_all_params">
						<IconTrash
							size={16}
							stroke={2}
							onClick={() => {
								dispatch(deleteAllParams());
							}}
						/>
					</div>
				</div>
			</section>
			<section className="query_params_body_wrapper">
				<ParamsList />
			</section>
		</>
	);
};
