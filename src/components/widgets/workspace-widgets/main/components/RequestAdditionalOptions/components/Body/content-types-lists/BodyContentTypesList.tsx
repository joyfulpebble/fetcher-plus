import { useAppDispatch, useAppSelector } from "../../../../../../../../../hooks/redux/redux";

import { IconCheck } from "@tabler/icons-react";

import { bodyContentTypes } from "../../../../../../../../../tools/constants";
import requestBodyTypeSlice from "../../../../../../../../../redux/reducers/requestBodyTypeSlice";

import { CommonT } from "../../../../../../../../../types/common";
import "../styles/BodyContentTypeList.scss";

export const BodyContentTypesList = () => {
	const dispatch = useAppDispatch();
	const { updateContentType } = requestBodyTypeSlice.actions;
	const { contentType } = useAppSelector((state) => state.requestBodyTypeReducer);

	return (
		<>
			{bodyContentTypes.map((element: CommonT.BodyContentType) => (
				<div
					key={element}
					className={`body_content_type_list_element ${element === contentType && "selected"}`}
					onClick={() => {
						dispatch(updateContentType(element));
					}}
				>
					{element}
					{element === contentType && <IconCheck size={12} />}
				</div>
			))}
		</>
	);
};
