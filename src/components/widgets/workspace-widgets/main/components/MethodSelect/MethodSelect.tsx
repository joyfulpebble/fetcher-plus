import { useAppSelector } from "../../../../../../hooks/redux/redux";

import { IconChevronDown } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import MethodsList from "./Lists/MethodsList";

import "./MethodSelect.scss";
import "./Lists/Lists.scss";

/** TODO:
 * - Сделать отельный redux store для выбранного метода
 */

function MethodSelect() {
	const { requestMethod } = useAppSelector((state) => state.requestConfigReducer);

	return (
		<>
			<Tippy
				className="tippy_method_select_wrapper"
				placement="bottom"
				content={<MethodsList />}
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
						style={{ marginLeft: 5 }}
						size={15}
						stroke={2}
					/>
				</div>
			</Tippy>
		</>
	);
}

export default MethodSelect;
