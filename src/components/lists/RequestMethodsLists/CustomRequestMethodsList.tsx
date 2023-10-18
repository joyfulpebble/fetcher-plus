import { IconTrash } from "@tabler/icons-react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import customRequestMethodsListSlice from "../../../redux/reducers/customRequestMethodsListSlice";
import requestSelectedMethodSlice from "../../../redux/reducers/requestSelectedMethodSlice";

import "./RequestMethodsLists.scss";

const CustomRequestMethodsList = () => {
	const dispatch = useAppDispatch();

	const customMethods = useAppSelector((state) => state.customRequestMethodsListReducer);
	const requestMethod = useAppSelector((state) => state.requestSelctedMethod);

	const { deleteCustomMethod } = customRequestMethodsListSlice.actions;
	const { updateRequestMethod } = requestSelectedMethodSlice.actions;

	const list = customMethods.map((element: string) => (
		<div
			key={element}
			className={`methods_list_element custom_method_element_wrapper ${
				requestMethod === element ? "selected" : ""
			}`}
		>
			<div
				className="methods_list_request_name_wrapper"
				onClick={() => {
					dispatch(updateRequestMethod(element));
				}}
			>
				<span className="methods_list_request_name">{element}</span>
			</div>
			<IconTrash
				className="methods_list_delete_button"
				size={16}
				onClick={() => {
					dispatch(deleteCustomMethod(element));
					dispatch(updateRequestMethod("GET"));
				}}
			/>
		</div>
	));

	return <>{list.map((element) => element)}</>;
};

export default CustomRequestMethodsList;
