import { useAppDispatch, useAppSelector } from "../../../../../../../hooks/redux/redux";
import requestConfigSlice from "../../../../../../../redux/reducers/requestConfigSlice";

import { IconCheck } from "@tabler/icons-react";
import Divider from "../../../../../../UI/Divider/Divider";

import "./TippyList.scss";
import { CommonT } from "../../../../../../../types/common";

function TippyList() {
	const dispatch = useAppDispatch();
	const { updateConfig } = requestConfigSlice.actions;

	const methods: Array<CommonT.MainRequestMethods> = ["GET", "POST", "PUT", "PATCH", "DELETE"];
	const { method } = useAppSelector((state) => state.requestConfigReducer);

	const list: Array<JSX.Element> = methods.map(
		(element: CommonT.MainRequestMethods, index: number) => (
			<div
				className={`tippy_list_element ${
					method === element ? "selected" : ""
				} ${element.toLowerCase()}`}
				key={index}
				onClick={() => dispatch(updateConfig(element))}
			>
				{method === element ? (
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
