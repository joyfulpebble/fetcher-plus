import { useState, useRef } from "react";

import { IconPlus } from "@tabler/icons-react";

import DefaultRequestMethodsList from "./DefaultRequestMethodsList";
import CustomRequestMethodsList from "./CustomRequestMethodsList";
import Divider from "../../ui/Divider/Divider";
import Modal from "../../ui/Modal/Modal";
import Input from "../../ui/Input/Input";

import { defaultRequestMethods as defaultMethods } from "../../../tools/constants";
import { isRequired } from "../../../tools/validation/isRequired";
import { isIncluded } from "../../../tools/validation/isIncluded";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import customRequestMethodsListSlice from "../../../redux/reducers/customRequestMethodsListSlice";
import requestSelectedMethodSlice from "../../../redux/reducers/requestSelectedMethodSlice";

import "./RequestMethodsLists.scss";

function MethodsList() {
	const dispatch = useAppDispatch();
	const customMethods = useAppSelector((state) => state.customRequestMethodsListReducer);
	const { addCustomMethod } = customRequestMethodsListSlice.actions;
	const { updateRequestMethod } = requestSelectedMethodSlice.actions;

	const [customMethodModalView, setCustomMethodModalView] = useState<boolean>(false);
	const [inputError, setInputError] = useState<string | null>(null);

	const customMethodNameRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<Modal
				title="Adding a custom request name"
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
					dispatch(addCustomMethod(customMethodNameRef.current?.value.toUpperCase()!));
					dispatch(updateRequestMethod(customMethodNameRef.current?.value.toUpperCase()!));

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
			<div>
				<DefaultRequestMethodsList />
				<Divider />
				<div
					onClick={() => {
						setCustomMethodModalView(true);
					}}
					className="methods_list_element"
				>
					<IconPlus
						size={15}
						stroke={2}
						style={{ marginRight: 5 }}
					/>
					Add custom
				</div>
				{customMethods.length ? (
					<>
						<Divider />
						<CustomRequestMethodsList />
					</>
				) : null}
			</div>
		</>
	);
}
export default MethodsList;
