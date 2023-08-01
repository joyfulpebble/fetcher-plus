import { useState } from "react";

import { IconChevronDown } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import TippyList from "./tippy/TippyList";

import "./MethodSelect.scss";

function MethodSelect() {
	const methods_array = ["GET", "POST", "PUT", "PATCH", "DELETE"];
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
				offset={[5, 5]}
				maxWidth={120}
			>
				<div
					id="tippy-select-request-method"
					className="method_select_wrapper"
				>
					{selectedMethod}
					<IconChevronDown
						size={15}
						stroke={2}
					/>
				</div>
			</Tippy>
		</>
	);
}

export default MethodSelect;
