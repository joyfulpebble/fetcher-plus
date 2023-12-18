import SwitchToggle from "react-switch";
import type { HTMLAttributes } from "react";

interface SwitchPropsT extends HTMLAttributes<HTMLButtonElement> {
	checked: boolean;
	spanText?: string;
	handleIsCheckedParameters?: () => void;
}

function Switch({ handleIsCheckedParameters, checked, spanText }: SwitchPropsT): JSX.Element {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<SwitchToggle
				onChange={() => {
					if (!!handleIsCheckedParameters) handleIsCheckedParameters;
				}}
				checked={checked}
				onColor={"#614fd1"}
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
