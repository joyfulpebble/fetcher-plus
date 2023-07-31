import Tippy from "@tippyjs/react";
import { useState } from "react";

import TippyList from "./tippy/TippyList";

import "./MethodSelect.scss";

function MethodSelect() {
	const methods_array = ["GET", "PUT", "POST", "PATCH", "DELETE"];
	const [selectedMethod, setSelectedMethod] = useState<string>(methods_array[0]);

	return (
		<>
			<Tippy
				className="tippy_method_select_wrapper"
				placement="bottom"
				content={
					<TippyList
						methodsArr={methods_array}
						selectedMethod={selectedMethod}
						selectMethod={setSelectedMethod}
					/>
				}
				interactive={true}
				hideOnClick={true}
				animation="shift-away"
				trigger="click"
				arrow={false}
				offset={[0, 5]}
				maxWidth={100}
			>
				<div
					id="tippy-select-request-method"
					className="method_select_wrapper"
				>
					{selectedMethod}
				</div>
			</Tippy>
		</>
	);
}

export default MethodSelect;
