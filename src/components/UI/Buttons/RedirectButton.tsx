import { Link } from "react-router-dom";

import type { ElementsT } from "../.././../types/elements";

import { useClassNames } from "../../../hooks/useClassNames";
import "./styles/Button.scss";

function RedirectButton({
	redirectPath,
	content,
	disabled,
	buttonStyle
}: ElementsT.RedirectButtonPropsI): JSX.Element {
	const classnames = useClassNames();
	const button_class: string = classnames("button", {
		danger: buttonStyle === "danger",
		primary: buttonStyle === "primary",
		secondary: buttonStyle === "secondary"
	});

	return (
		<>
			<button
				className={button_class}
				disabled={disabled}
			>
				<Link
					className={`redirect ${disabled ? "disabled" : ""}`}
					to={redirectPath}
				>
					{content}
				</Link>
			</button>
		</>
	);
}

export default RedirectButton;
