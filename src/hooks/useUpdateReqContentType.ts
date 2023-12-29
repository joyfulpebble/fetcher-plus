import { useAppDispatch, useAppSelector } from "./redux/redux";
import requestHeadersSlice from "../redux/reducers/requestHeadersSlice";

import { v1 as uuidv1 } from "uuid";
import { type CommonT } from "../types/common";
import Service from "../API/Service";

const useCheckReqContentType = () => {
	const dispatch = useAppDispatch();
	const headers = useAppSelector((state) => state.requestHeadersSlice);
	const { addHeader, updateHeaderValue, deleteHeader } = requestHeadersSlice.actions;

	const body_type_variants = {
		"none": "",
		"raw": "text/plain",
		"form-data": "multipart/form-data",
		"x-www-form-urlencoded": "application/x-www-form-urlencoded"
	};

	return function (key: CommonT.BodyContentType, service?: Service) {
		if (headers.filter((item) => item.key === "Content-Type").length != 0) {
			headers.map((header) => {
				if (header.key == "Content-Type") {
					if (key === "none") {
						dispatch(deleteHeader(header._id));
					}
					dispatch(
						updateHeaderValue({
							headerID: header._id,
							value: body_type_variants[key]
						})
					);
				}
			});
		} else if (key !== "none") {
			service && service.updateHeader("Content-Type", body_type_variants[key]);
			dispatch(
				addHeader({
					_id: uuidv1(),
					isUsed: true,
					key: "Content-Type",
					value: body_type_variants[key]
				})
			);
		}
	};
};

export default useCheckReqContentType;
