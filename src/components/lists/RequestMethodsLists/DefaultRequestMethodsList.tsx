import { defaultRequestMethods } from "../../../tools/constants";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestSelectedMethodSlice from "../../../redux/reducers/requestSelectedMethodSlice";

import type { CommonT } from "../../../types/common";
import "./RequestMethodsLists.scss";

const DefaultRequestMethodsList = () => {
	const dispatch = useAppDispatch();
	const requestMethod = useAppSelector((state) => state.requestSelctedMethod);
	const { updateRequestMethod } = requestSelectedMethodSlice.actions;

	const list = defaultRequestMethods.map((element: CommonT.MainRequestMethods, index: number) => (
		<div
			className={`list_element ${
				requestMethod === element ? "selected" : ""
			} ${element.toLowerCase()}`}
			key={index}
			onClick={() => dispatch(updateRequestMethod(element))}
		>
			{element}
		</div>
	));

	return <>{list.map((element) => element)}</>;
};

export default DefaultRequestMethodsList;
