import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import useCheckReqContentType from "../../../hooks/useUpdateReqContentType";

import { bodyContentTypes } from "../../../tools/constants";

import requestBodyTypeSlice from "../../../redux/reducers/requestBodyTypeSlice";

import { IconCheck } from "@tabler/icons-react";

import { CommonT } from "../../../types/common";
import "./RequestBodyContentTypesList.scss";

const RequestBodyContentTypesList = () => {
	const dispatch = useAppDispatch();
	const headersCheck = useCheckReqContentType();

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
						headersCheck(element);
					}}
				>
					{element}
					{element === contentType && <IconCheck size={12} />}
				</div>
			))}
		</>
	);
};

export default RequestBodyContentTypesList;
