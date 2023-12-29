import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";

import { bodyContentTypes } from "../../../tools/constants";
import requestHeadersSlice from "../../../redux/reducers/requestHeadersSlice";
import requestBodyTypeSlice from "../../../redux/reducers/requestBodyTypeSlice";

import { IconCheck } from "@tabler/icons-react";

import { CommonT } from "../../../types/common";
import "./RequestBodyContentTypesList.scss";

const RequestBodyContentTypesList = () => {
	const dispatch = useAppDispatch();
	const { updateContentType } = requestBodyTypeSlice.actions;
	const { updateHeaderValue } = requestHeadersSlice.actions;
	const { contentType } = useAppSelector((state) => state.requestBodyTypeReducer);
	const headers = useAppSelector((state) => state.requestHeadersSlice);

	return (
		<>
			{bodyContentTypes.map((element: CommonT.BodyContentType) => (
				<div
					key={element}
					className={`body_content_type_list_element ${element === contentType && "selected"}`}
					onClick={() => {
						const body_type_variants = {
							"none": "",
							"raw": "text/plain",
							"form-data": "multipart/form-data",
							"x-www-form-urlencoded": "application/x-www-form-urlencoded"
						};

						headers.map((header) => {
							if (header.key === "Content-Type") {
								dispatch(
									updateHeaderValue({
										headerID: header._id,
										value: body_type_variants[element]
									})
								);
							}
						});
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

export default RequestBodyContentTypesList;
