import { IconCheck, IconTrash } from "@tabler/icons-react";

import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../redux/reducers/requestConfigSlice";
import customRequestMethodsListSlice from "../../../../../../../redux/reducers/customRequestMethodsListSlice";

import "./Lists.scss";

export const CustomMethodsList = () => {
	const dispatch = useAppDispatch();

	const customMethods = useAppSelector((state) => state.customRequestMethodsListReducer);
	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);

	const { deleteCustomMethod } = customRequestMethodsListSlice.actions;
	const { updateConfig } = requestConfigSlice.actions;

	const list = customMethods.map((element: string) => (
		<div
			key={element}
			className={`list_element ${requestMethod === element ? "selected" : ""}`}
			style={{ display: "flex", justifyContent: "space-between" }}
		>
			<div
				style={{ display: "flex", alignItems: "center", width: "100%" }}
				onClick={() => {
					dispatch(updateConfig(element));
				}}
			>
				{requestMethod === element && (
					<IconCheck
						size={15}
						stroke={2}
						style={{ marginRight: 5 }}
					/>
				)}
				<span className="list_request_name">{element}</span>
			</div>
			<IconTrash
				className="list_delete_button"
				size={15}
				stroke={2}
				onClick={() => {
					dispatch(deleteCustomMethod(element));
					dispatch(updateConfig("GET"));
				}}
			/>
		</div>
	));

	return <>{list.map((element) => element)}</>;
};
