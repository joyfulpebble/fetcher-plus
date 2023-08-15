import { useAppSelector } from "../../../../../../hooks/redux/redux";

import { defaultRequestMethods } from "../../../../../../tools/constants";

import { IconChevronDown } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import TippyList from "./tippy/TippyList";

import "./MethodSelect.scss";
import "./tippy/TippyList.scss";

function MethodSelect() {
	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);
	const customRequestMethods = useAppSelector((state) => state.customRequestMethodsListReducer);

	return (
		<>
			<Tippy
				className="tippy_method_select_wrapper"
				placement="bottom"
				content={
					<>
						<TippyList
							defaultMethods={defaultRequestMethods}
							customMethods={customRequestMethods}
						/>
					</>
				}
				interactive={true}
				hideOnClick={true}
				animation="shift-away"
				trigger="click"
				arrow={false}
				offset={[5, 5]}
				maxWidth={160}
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
