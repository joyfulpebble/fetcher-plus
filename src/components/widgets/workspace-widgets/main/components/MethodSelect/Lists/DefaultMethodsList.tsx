import { IconCheck } from "@tabler/icons-react";

import { defaultRequestMethods } from "../../../../../../../tools/constants";

import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../redux/reducers/requestConfigSlice";

import "./Lists.scss";
import type { CommonT } from "../../../../../../../types/common";

export const DefaultMethodsList = () => {
	const dispatch = useAppDispatch();
	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);
	const { updateMethod } = requestConfigSlice.actions;

	const list = defaultRequestMethods.map((element: CommonT.MainRequestMethods, index: number) => (
		<div
			className={`list_element ${
				requestMethod === element ? "selected" : ""
			} ${element.toLowerCase()}`}
			key={index}
			onClick={() => dispatch(updateMethod(element))}
		>
			{requestMethod === element ? (
				<IconCheck
					size={15}
					stroke={2}
					style={{ marginRight: 5 }}
				/>
			) : null}
			{element}
		</div>
	));

	return <>{list.map((element) => element)}</>;
};
