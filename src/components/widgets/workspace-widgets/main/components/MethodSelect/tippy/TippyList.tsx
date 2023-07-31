import { memo } from "react";

import Divider from "../../../../../../UI/Divider/Divider";
import "./TippyList.scss";

interface TippyListI {
	methodsArr: Array<string>;
	selectedMethod: string;
	selectMethod: React.Dispatch<React.SetStateAction<string>>;
}
const TippyList = memo(function TippyList({
	methodsArr,
	selectedMethod,
	selectMethod
}: TippyListI) {
	const list: JSX.Element[] = methodsArr.map((element: any, index: number) => (
		<div
			className={`tippy_list_element ${selectedMethod === element ? "selected" : ""}`}
			key={index}
			onClick={() => {
				selectMethod(element);
			}}
		>
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
});
export default TippyList;
