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
import AddingCustomRequestMethodModal from "../../modals/RequestMethods/AddingCustomRequestMethodModal";

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
			<AddingCustomRequestMethodModal
				view={customMethodModalView}
				setView={setCustomMethodModalView}
			/>
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
