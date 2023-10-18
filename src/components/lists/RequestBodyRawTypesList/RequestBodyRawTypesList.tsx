import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";

import { bodyRawTypes } from "../../../tools/constants";
import requestBodyTypeSlice from "../../../redux/reducers/requestBodyTypeSlice";

import { IconCheck } from "@tabler/icons-react";

import { CommonT } from "../../../types/common";
import "./RequestBodyRawTypesList.scss";

const RequestBodyRawTypesList = () => {
	const dispatch = useAppDispatch();
	const { updateRawType } = requestBodyTypeSlice.actions;
	const { rawType } = useAppSelector((state) => state.requestBodyTypeReducer);

	return (
		<>
			{bodyRawTypes.map((element: CommonT.BodyRawType) => (
				<div
					key={element}
					className={`body_content_type_list_element ${element === rawType && "selected"}`}
					onClick={() => {
						dispatch(updateRawType(element));
					}}
				>
					{element}
					{element === rawType && <IconCheck size={12} />}
				</div>
			))}
		</>
	);
};

export default RequestBodyRawTypesList;
