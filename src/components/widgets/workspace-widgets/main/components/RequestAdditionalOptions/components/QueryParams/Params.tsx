import { useState, useRef } from "react";

import { useAppDispatch } from "../../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../../redux/reducers/requestConfigSlice";

import { ParamsList } from "./ParamsList";
import Modal from "../../../../../../../UI/Modal/Modal";
import Input from "../../../../../../../UI/Input/Input";
import { IconTrash, IconPlus } from "@tabler/icons-react";

import "./QueryParams.scss";

export const Params = () => {
	const dispatch = useAppDispatch();
	const { updateParams } = requestConfigSlice.actions;

	const [newParameterModalView, setNewParameterModalView] = useState(false);
	const parameterNameRef = useRef<HTMLInputElement>(null);
	const parameterValueRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<section className="query_params_header_wrapper">
				<span className="additional_option_name">Query Parameters</span>
				<div className="additional_option_controls">
					<IconPlus
						className="add_new_param"
						style={{ cursor: "pointer", marginRight: 5 }}
						size={16}
						stroke={2}
						onClick={() => {
							setNewParameterModalView(true);
						}}
					/>
					<IconTrash
						className="delete_all_params"
						style={{ cursor: "pointer", marginLeft: 5 }}
						size={16}
						stroke={2}
					/>
				</div>
			</section>
			<Modal
				title="New query parameter"
				visibility={newParameterModalView}
				onCancel={() => true}
				onSubmit={() => {
					const query_parameter_key = parameterNameRef.current?.value!;
					const query_parameter_value = parameterValueRef.current?.value!;
					const query_parameter = {
						[query_parameter_key]: query_parameter_value
					};

					dispatch(updateParams(query_parameter));

					return true;
				}}
				onClose={() => setNewParameterModalView(false)}
			>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					<Input
						name="parameterName"
						label="Enter parameter name:"
						placeholder="Some name..."
						maxLength={20}
						error={""}
						innerRef={parameterNameRef}
						onChange={() => {}}
					/>
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
			</Modal>
			<section className="query_params_body_wrapper">
				<ParamsList />
			</section>
		</>
	);
};
