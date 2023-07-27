import Tippy from "@tippyjs/react";
import { useState } from "react";

import TippyList from "./tippy/TippyList";

import "./MethodSelect.scss";

function MethodSelect() {
	const methods_array = ["GET", "PUT", "POST", "PATCH", "DELETE"];
	const [method, setMethod] = useState<string>(methods_array[0]);

	return (
		<>
			<Tippy
				placement="bottom"
				content={
					<TippyList
						methodsArr={methods_array}
						selectItem={setMethod}
					/>
				}
				interactive={true}
				hideOnClick={true}
				animation="shift-away"
				trigger="click"
				arrow={false}
				offset={[0, 0]}
				maxWidth={100}
			>
				<input
					type="text"
					id="tippy-select-request-method"
					className="method_select_wrapper"
					value={method}
					readOnly
				></input>
			</Tippy>
		</>
	);
}

export default MethodSelect;
