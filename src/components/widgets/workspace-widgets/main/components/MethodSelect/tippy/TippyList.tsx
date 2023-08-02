import { IconCheck } from "@tabler/icons-react";
import Divider from "../../../../../../UI/Divider/Divider";

import type { ElementsT } from "../../../../../../../types/elements";

import "./TippyList.scss";

function TippyList({ methodsArr, selectedMethod, selectMethod }: ElementsT.TippyListI) {
	const list: JSX.Element[] = methodsArr.map((element: any, index: number) => (
		<div
			className={`tippy_list_element ${
				selectedMethod === element ? "selected" : ""
			} ${element.toLowerCase()}`}
			key={index}
			onClick={() => {
				selectMethod(element);
			}}
		>
			{selectedMethod === element ? (
				<IconCheck
					size={15}
					stroke={2.5}
					style={{ marginRight: 8 }}
				/>
			) : null}
			{element}
		</div>
	));

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
