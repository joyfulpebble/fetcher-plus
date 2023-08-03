import { useAppSelector } from "../../../../../../hooks/redux/redux";

import { IconChevronDown } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import TippyList from "./tippy/TippyList";

import "./MethodSelect.scss";

function MethodSelect() {
	const { method } = useAppSelector((state) => state.requestConfigReducer);

	return (
		<>
			<Tippy
				className="tippy_method_select_wrapper"
				placement="bottom"
				content={<TippyList />}
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
					{method}
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
