import { Link } from "react-router-dom";
import { useClassnames } from "../../../hooks/useClassnames";
import "./styles/Button.scss";

type ButtonStylesT = "primary" | "secondary" | "danger" | "invisible";
export interface RedirectButtonProps extends React.HTMLProps<HTMLButtonElement> {
	content?: string;
	icon?: JSX.Element;
	disabled?: boolean;
	buttonStyle: ButtonStylesT;
	redirectPath: string;
	// eslint-disable-next-line no-unused-vars
	onClick?: (e: React.MouseEvent) => void;
}

function RedirectButton({
	redirectPath,
	content,
	disabled,
	buttonStyle
}: RedirectButtonProps): JSX.Element {
	const button_class: string = useClassnames("button_wrapper", {
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
