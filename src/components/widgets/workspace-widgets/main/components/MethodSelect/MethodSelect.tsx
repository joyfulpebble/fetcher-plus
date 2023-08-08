import { useAppSelector } from "../../../../../../hooks/redux/redux";

import { IconChevronDown } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import TippyList from "./tippy/TippyList";

import "./MethodSelect.scss";
import "./tippy/TippyList.scss";

function MethodSelect() {
	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);
	const methods = useAppSelector((state) => state.requestMethodsListReducer);

	return (
		<>
			<Tippy
				className="tippy_method_select_wrapper"
				placement="bottom"
				content={<TippyList methods={methods} />}
				interactive={true}
				hideOnClick={true}
				animation="shift-away"
				trigger="click"
				arrow={false}
				offset={[5, 5]}
				maxWidth={120}
			>
				<div className="method_select_wrapper">
					<div
						id="tippy-select-request-method"
						className={`${requestMethod.toLowerCase()}`}
					>
						{requestMethod}
					</div>
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
