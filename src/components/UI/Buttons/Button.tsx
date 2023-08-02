import { useClassNames } from "../../../hooks/useClassNames";
import "./styles/Button.scss";

import type { ElementsT } from "../.././../types/elements";

function Button({ content, buttonStyle, disabled, onClick }: ElementsT.ButtonPropsI): JSX.Element {
	const classnames = useClassNames();
	const button_class: string = classnames("button", {
		danger: buttonStyle === "danger",
		primary: buttonStyle === "primary",
		secondary: buttonStyle === "secondary"
	});

	return (
		<>
			<button
				disabled={disabled}
				className={button_class}
				onClick={onClick}
			>
				{content}
			</button>
		</>
	);
}

export default Button;
