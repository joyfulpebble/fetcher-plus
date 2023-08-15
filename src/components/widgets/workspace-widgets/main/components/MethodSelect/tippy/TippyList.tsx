import { useState, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../redux/reducers/requestConfigSlice";

import { IconCheck, IconPlus } from "@tabler/icons-react";
import Divider from "../../../../../../UI/Divider/Divider";

import "./TippyList.scss";
import type { CommonT } from "../../../../../../../types/common";
import customRequestMethodsListSlice from "../../../../../../../redux/reducers/customRequestMethodsListSlice";
import Modal from "../../../../../../UI/Modal/Modal";
import Input from "../../../../../../UI/Input/Input";
import { useForm } from "../../../../../../../hooks/useForm";
import RequestInput from "../../RequestInput/RequestInput";

interface TippyListPropsI {
	defaultMethods: Array<CommonT.MainRequestMethods>;
	customMethods: Array<string | undefined>;
}

interface CustomMethodNameI {
	requestName: string;
}

function TippyList({ defaultMethods, customMethods }: TippyListPropsI) {
	const dispatch = useAppDispatch();
	const { values, saveFuildValue } = useForm<CustomMethodNameI>({
		initialValues: { requestName: "" }
	});

	const customMethodNameRef = useRef<HTMLInputElement>(null);

	const { addCustomMethod } = customRequestMethodsListSlice.actions;
	const { updateConfig } = requestConfigSlice.actions;

	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);

	const [customMethodModalView, setCustomMethodModalView] = useState(false);

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
						style={{ marginRight: 8 }}
					/>
				) : null}
				{element}
			</div>
		)
	);

	const customRequestMethodsList: Array<JSX.Element> | null = customMethods
		? customMethods.map((element: CommonT.MainRequestMethods, index: number) => (
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
							style={{ marginRight: 8 }}
						/>
					) : null}
					{element}
				</div>
		  ))
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
						style={{ marginRight: 8 }}
					/>
					Add custom
				</div>
				<Modal
					title="Custom requset name"
					visibility={customMethodModalView}
					setVisibility={setCustomMethodModalView}
					onSubmit={() => {
						saveFuildValue("requestName", customMethodNameRef.current?.value!);
						console.log(values.current.requestName);

						dispatch(addCustomMethod(values.current.requestName));
						console.log(customMethods);
					}}
				>
					<div>
						label
						<RequestInput inputRef={customMethodNameRef} />
					</div>
				</Modal>
				{customMethods ? (
					<>
						<Divider />
						{customRequestMethodsList}
					</>
				) : null}
			</div>
		</>
	);
}
export default TippyList;
