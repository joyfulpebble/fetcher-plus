import { IconCheck } from "@tabler/icons-react";
import Divider from "../../../../../../UI/Divider/Divider";

import "./TippyList.scss";

interface TippyListI {
	methodsArr: Array<string>;
	selectedMethod: string;
	selectMethod: React.Dispatch<React.SetStateAction<string>>;
}
function TippyList({ methodsArr, selectedMethod, selectMethod }: TippyListI) {
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
