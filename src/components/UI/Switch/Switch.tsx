import SwitchToggle from "react-switch";

import type { ElementsT } from "../../../types/elements";

function Switch({
	handleIsCheckedParameters,
	needParameters,
	spanText
}: ElementsT.SwitchProps): JSX.Element {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<SwitchToggle
				onChange={handleIsCheckedParameters}
				checked={needParameters}
				onColor={"#5839af"}
				activeBoxShadow={"none"}
				handleDiameter={13}
				uncheckedIcon={false}
				height={17}
				width={35}
			/>
			<span style={{ marginLeft: 5 }}>{spanText}</span>
		</div>
	);
}

export default Switch;
