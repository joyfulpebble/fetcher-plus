import OfflineSVG from "../../../assets/svg/OfflineSVG";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

import "./styles/Tippy.scss";

function OfflineTippy(): JSX.Element {
	return (
		<Tippy
			className={"tippy_wrapper"}
			content={<span>No internet connection</span>}
			animation="shift-away"
			hideOnClick={false}
			trigger="mouseenter"
			placement="top-end"
			maxWidth={88}
		>
			<div>
				<OfflineSVG />
			</div>
		</Tippy>
	);
}

export default OfflineTippy;
