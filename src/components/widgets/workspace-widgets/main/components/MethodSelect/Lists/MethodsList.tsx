import { useState, useRef } from "react";

import { defaultRequestMethods as defaultMethods } from "../../../../../../../tools/constants";

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
	const [inputError, setInputError] = useState({ is: false, text: "" });

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
						if (!customMethodNameRef.current?.value) {
							setInputError({ is: true, text: "This field is required." });
							return false;
						}
						if (
							customMethods.includes(customMethodNameRef.current?.value.toUpperCase()) ||
							defaultMethods.find(
								(validName) => validName === customMethodNameRef.current?.value.toUpperCase()
							)
						) {
							setInputError({ is: true, text: "This method has already been added." });
							return false;
						}

						setInputError({ is: false, text: "" });
						dispatch(addCustomMethod(customMethodNameRef.current?.value.toUpperCase()));

						return true;
					}}
					onCancel={() => true}
					onClose={() => {
						setInputError({ is: false, text: "" });
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
							if (!customMethodNameRef.current?.value)
								setInputError({ is: true, text: "This field is required" });
							else setInputError({ is: false, text: "" });
							if (
								customMethods.includes(customMethodNameRef.current?.value.toUpperCase()) ||
								defaultMethods.find(
									(validName) => validName === customMethodNameRef.current?.value.toUpperCase()
								)
							)
								setInputError({ is: true, text: "This method has already been added." });
							else setInputError({ is: false, text: "" });
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
