import { IconTrash } from "@tabler/icons-react";

import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import customRequestMethodsListSlice from "../../../../../../../redux/reducers/customRequestMethodsListSlice";
import requestSelectedMethodSlice from "../../../../../../../redux/reducers/requestSelectedMethodSlice";

import "./Lists.scss";

export const CustomMethodsList = () => {
	const dispatch = useAppDispatch();

	const customMethods = useAppSelector((state) => state.customRequestMethodsListReducer);
	const requestMethod = useAppSelector((state) => state.requestSelctedMethod);

	const { deleteCustomMethod } = customRequestMethodsListSlice.actions;
	const { updateRequestMethod } = requestSelectedMethodSlice.actions;

	const list = customMethods.map((element: string) => (
		<div
			key={element}
			className={`list_element ${requestMethod === element ? "selected" : ""}`}
			style={{ display: "flex", justifyContent: "space-between" }}
		>
			<div
				style={{ display: "flex", alignItems: "center", width: "100%" }}
				onClick={() => {
					dispatch(updateRequestMethod(element));
				}}
			>
				<span className="list_request_name">{element}</span>
			</div>
			<IconTrash
				className="list_delete_button"
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
