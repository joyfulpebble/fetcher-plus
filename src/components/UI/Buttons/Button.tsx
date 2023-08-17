import { useClassnames } from "../../../hooks/useClassnames";
import "./styles/Button.scss";

import type { ElementsT } from "../.././../types/elements";

function Button({ content, buttonStyle, disabled, onClick }: ElementsT.ButtonPropsI): JSX.Element {
	const button_class: string = useClassnames("button", {
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
