import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../redux/reducers/requestConfigSlice";

import { IconCheck } from "@tabler/icons-react";
import Divider from "../../../../../../UI/Divider/Divider";

import "./TippyList.scss";
import type { CommonT } from "../../../../../../../types/common";

interface TippyListPropsI {
	methods: Array<CommonT.MainRequestMethods>;
}

function TippyList({ methods }: TippyListPropsI) {
	const dispatch = useAppDispatch();
	const { updateConfig } = requestConfigSlice.actions;

	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);

	const list: Array<JSX.Element> = methods.map(
		(element: CommonT.MainRequestMethods, index: number) => (
			<div
				className={`tippy_list_element ${
					requestMethod === element ? "selected" : ""
				} ${element.toLowerCase()}`}
				key={index}
				onClick={() => dispatch(updateConfig(element))}
			>
				{requestMethod === element ? (
					<IconCheck
						size={15}
						stroke={2.5}
						style={{ marginRight: 8 }}
					/>
				) : null}
				{element}
			</div>
		)
	);

	return (
		<>
			<div>
				{list}
				<Divider />
			</div>
		</>
	);
}
export default TippyList;
