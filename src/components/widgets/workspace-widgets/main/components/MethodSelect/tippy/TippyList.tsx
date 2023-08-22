import { useState, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../redux/reducers/requestConfigSlice";

import { IconCheck, IconPlus, IconTrash } from "@tabler/icons-react";
import Divider from "../../../../../../UI/Divider/Divider";

import "./TippyList.scss";
import type { CommonT } from "../../../../../../../types/common";
import customRequestMethodsListSlice from "../../../../../../../redux/reducers/customRequestMethodsListSlice";
import Modal from "../../../../../../UI/Modal/Modal";
import Input from "../../../../../../UI/Input/Input";

interface TippyListPropsI {
	defaultMethods: Array<CommonT.MainRequestMethods>;
	customMethods: Array<string | undefined>;
}

/**
 * TODO:
 * + Custom Input
 * + Validation adding custom requests
 * * + Check new request on repeating, length
 * + Deleting custom requests
 * + Fix fonts
 * * - Decompose new method validation into a separate function
 * - Animate request list items
 * - Decompose element logic in external hook
 * - Change the value of the request method in the main form to default when deleting the selected method
 */

function TippyList({ defaultMethods, customMethods }: TippyListPropsI) {
	const [customMethodModalView, setCustomMethodModalView] = useState(false);
	const [inputError, setInputError] = useState({ is: false, text: "" });

	const customMethodNameRef = useRef<HTMLInputElement>(null);

	const dispatch = useAppDispatch();
	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);
	const { addCustomMethod, deleteCustomMethod } = customRequestMethodsListSlice.actions;
	const { updateConfig } = requestConfigSlice.actions;

	const defaultRequestMethodsList: Array<JSX.Element> = defaultMethods.map(
		(element: CommonT.MainRequestMethods, index: number) => (
			<div
				className={`tippy_list_element ${
					requestMethod === element ? "selected" : ""
				} ${element.toLowerCase()}`}
				key={index}
				onClick={() => dispatch(updateConfig(element))}
			>
				{requestMethod === element ? (
					<IconCheck
						size={15}
						stroke={2}
						style={{ marginRight: 5 }}
					/>
				) : null}
				{element}
			</div>
		)
	);

	const customRequestMethodsList: Array<JSX.Element> | null = customMethods
		? customMethods.map((element: CommonT.MainRequestMethods | string, index: number) => {
				element = element.toUpperCase();

				return (
					<div
						className={`tippy_list_element ${
							requestMethod === element ? "selected" : ""
						} ${element.toLowerCase()}`}
						key={index}
						onClick={() => dispatch(updateConfig(element))}
						style={{ display: "flex", justifyContent: "space-between" }}
					>
						<div style={{ display: "flex", alignItems: "center" }}>
							{requestMethod === element ? (
								<IconCheck
									size={15}
									stroke={2}
									style={{ marginRight: 5 }}
								/>
							) : null}
							<span className="tippy_list_request_name">{element}</span>
						</div>
						<IconTrash
							className="tippy_list_delete"
							size={15}
							stroke={2}
							onClick={() => {
								dispatch(deleteCustomMethod(element));
							}}
						/>
					</div>
				);
		  })
		: null;

	return (
		<>
			<div>
				{defaultRequestMethodsList}
				<Divider />
				<div
					onClick={() => {
						setCustomMethodModalView(true);
					}}
					className="tippy_list_element add_custom_method_btn"
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
						dispatch(addCustomMethod(customMethodNameRef.current?.value));

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
					/>
				</Modal>
				{customMethods[0] && (
					<>
						<Divider />
						{customRequestMethodsList}
					</>
				)}
			</div>
		</>
	);
}
export default TippyList;
