import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";

import { authApiTypes } from "../../../tools/constants";
import requestAuthTypeSlice from "../../../redux/reducers/requestAuthTypeSlice";

import { IconCheck } from "@tabler/icons-react";

import { CommonT } from "../../../types/common";
import "./RequestAuthApiTypesList.scss";

const RequestAuthApiTypesList = () => {
	const dispatch = useAppDispatch();
	const { updateAuthApiKeyType } = requestAuthTypeSlice.actions;
	const { authApiKeyType } = useAppSelector((state) => state.requestAuthTypeReducer);

	return (
		<>
			{authApiTypes.map((element: CommonT.AuthApiKeyType) => (
				<div
					key={element}
					className={`api_key_type_list_element ${element === authApiKeyType && "selected"}`}
					onClick={() => {
						dispatch(updateAuthApiKeyType(element));
					}}
				>
					{element}
					{element === authApiKeyType && <IconCheck size={12} />}
				</div>
			))}
		</>
	);
};

export default RequestAuthApiTypesList;
