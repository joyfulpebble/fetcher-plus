import OnlineSVG from "../../../assets/svg/OnlineSVG";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

import "./styles/Tippy.scss";

function OnlineTippy(): JSX.Element {
	return (
		<Tippy
			className={"tippy_wrapper"}
			content={<span>Internet connected</span>}
			animation="shift-away"
			hideOnClick={false}
			trigger="mouseenter"
			placement="top-end"
			maxWidth={82}
		>
			<div>
				<OnlineSVG />
			</div>
		</Tippy>
	);
}

export default OnlineTippy;
