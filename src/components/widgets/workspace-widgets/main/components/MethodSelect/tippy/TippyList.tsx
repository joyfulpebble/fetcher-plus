// import TippyListItem from "./TippyListItem";

import "./TippyList.scss";

interface TippyListI {
	methodsArr: Array<string>;
	selectItem: React.Dispatch<React.SetStateAction<string>>;
}

function TippyList({ methodsArr, selectItem }: TippyListI) {
	const list: JSX.Element[] = methodsArr.map((element: any, index: number) => (
		<div
			className="tippy_list_element"
			key={index}
			onClick={() => {
				selectItem(element);
			}}
		>
			{element}
		</div>
	));

	return (
		<>
			<div>{list}</div>
		</>
	);
}

export default TippyList;
