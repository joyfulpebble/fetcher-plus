import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";

import { authTypes } from "../../../tools/constants";
import requestAuthTypeSlice from "../../../redux/reducers/requestAuthTypeSlice";

import { IconCheck } from "@tabler/icons-react";

import { CommonT } from "../../../types/common";
import "./RequestAuthTypesList.scss";

const RequestAuthTypesList = () => {
	const dispatch = useAppDispatch();
	const { updateAuthType } = requestAuthTypeSlice.actions;
	const { authType } = useAppSelector((state) => state.requestAuthTypeReducer);

	return (
		<>
			{authTypes.map((element: CommonT.AuthType) => (
				<div
					key={element}
					className={`auth_type_list_element ${element === authType && "selected"}`}
					onClick={() => {
						dispatch(updateAuthType(element));
					}}
				>
					{element}
					{element === authType && <IconCheck size={12} />}
				</div>
			))}
		</>
	);
};

export default RequestAuthTypesList;
