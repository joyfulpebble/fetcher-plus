import { Link } from "react-router-dom";

import "./styles/Button.scss";
import { useClassNames } from "../../../hooks/useClassNames";

type ButtonStylesT = "primary" | "secondary" | "danger";
interface RedirectButtonPropsI {
	content: string;
	disabled?: boolean;
	redirectPath: string;
	buttonStyle: ButtonStylesT;
	// eslint-disable-next-line no-unused-vars
	onClick?: (e: React.MouseEvent) => void;
}

function RedirectButton({
	redirectPath,
	content,
	disabled,
	buttonStyle
}: RedirectButtonPropsI): JSX.Element {
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
