import { useClassnames } from "../../../hooks/useClassnames";
import "./styles/Button.scss";

type ButtonStylesT = "primary" | "secondary" | "danger" | "invisible";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	content?: string;
	icon?: JSX.Element;
	disabled?: boolean;
	buttonStyle: ButtonStylesT;
	// eslint-disable-next-line no-unused-vars
	onClick?: (e: React.MouseEvent) => void;
}

function Button({ content, buttonStyle, disabled, icon, onClick }: ButtonProps): JSX.Element {
	const button_class: string = useClassnames("button_wrapper", {
		button_danger: buttonStyle === "danger",
		button_primary: buttonStyle === "primary",
		button_secondary: buttonStyle === "secondary",
		button_invisible: buttonStyle === "invisible"
	});

	return (
		<>
			<button
				disabled={disabled}
				className={button_class}
				onClick={onClick}
			>
				{icon && <div className="button_icon">{icon}</div>}
				{content}
			</button>
		</>
	);
}

export default Button;
