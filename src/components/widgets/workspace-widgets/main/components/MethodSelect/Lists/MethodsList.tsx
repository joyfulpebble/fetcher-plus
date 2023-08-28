import { useState, useRef } from "react";

import { defaultRequestMethods as defaultMethods } from "../../../../../../../tools/constants";

import { isRequired } from "../../../../../../../tools/validation/isRequired";
import { isIncluded } from "../../../../../../../tools/validation/isIncluded";

import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import customRequestMethodsListSlice from "../../../../../../../redux/reducers/customRequestMethodsListSlice";

import { DefaultMethodsList } from "./DefaultMethodsList";
import { CustomMethodsList } from "./CustomMethodsList";
import { IconPlus } from "@tabler/icons-react";
import Divider from "../../../../../../UI/Divider/Divider";
import Modal from "../../../../../../UI/Modal/Modal";
import Input from "../../../../../../UI/Input/Input";

import "./Lists.scss";

function MethodsList() {
	const dispatch = useAppDispatch();
	const customMethods = useAppSelector((state) => state.customRequestMethodsListReducer);
	const { addCustomMethod } = customRequestMethodsListSlice.actions;

	const [customMethodModalView, setCustomMethodModalView] = useState(false);
	const [inputError, setInputError] = useState<string | null>(null);

	const customMethodNameRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<div>
				<DefaultMethodsList />
				<Divider />
				<div
					onClick={() => {
						setCustomMethodModalView(true);
					}}
					className="list_element"
				>
					<IconPlus
						size={15}
						stroke={2}
						style={{ marginRight: 5 }}
					/>
					Add custom
				</div>
				<Modal
					title="Custom request"
					visibility={customMethodModalView}
					onSubmit={() => {
						if (isRequired(customMethodNameRef.current?.value, setInputError)) return false;
						if (
							isIncluded(
								customMethodNameRef.current?.value.toUpperCase(),
								[customMethods, defaultMethods],
								setInputError
							)
						)
							return false;

						setInputError(null);
						dispatch(addCustomMethod(customMethodNameRef.current?.value.toUpperCase() || ""));

						return true;
					}}
					onCancel={() => true}
					onClose={() => {
						setInputError(null);
						setCustomMethodModalView(false);
					}}
				>
					<Input
						name="requestName"
						label="Enter request name: "
						placeholder="Some text"
						maxLength={20}
						error={inputError}
						innerRef={customMethodNameRef}
						onChange={() => {
							isRequired(customMethodNameRef.current?.value, setInputError);
							isIncluded(
								customMethodNameRef.current?.value.toUpperCase(),
								[customMethods, defaultMethods],
								setInputError
							);
						}}
						onKeyDown={(event) => {
							if (event.code === "Space") event.preventDefault();
						}}
					/>
				</Modal>
				<Divider />
				<CustomMethodsList />
			</div>
		</>
	);
}
export default MethodsList;
