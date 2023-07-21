import ErrorSVG from "../../../assets/svg/ErrorSVG";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

import "./styles/Tippy.scss";

function ErrorTippy({ errorCount }: any) {
	return (
		<Tippy
			className={"tippy_wrapper"}
			content={<span>{errorCount ? `Errors: ${errorCount}` : "No problems"}</span>}
			interactive={true}
			hideOnClick={false}
			appendTo={document.body}
			animation="shift-away"
			trigger="mouseenter"
		>
			<div className={"problems"}>
				<div style={{ marginTop: "2.5px" }}>
					<ErrorSVG
						w={15}
						h={15}
					/>
				</div>
				<span style={{ marginBottom: "0.5px" }}>{errorCount}</span>
			</div>
		</Tippy>
	);
}

export default ErrorTippy;
