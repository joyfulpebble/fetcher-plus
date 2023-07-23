import { useClassNames } from "../../../hooks/useClassNames";
import "./styles/Button.scss";

type ButtonStylesT = "primary" | "secondary" | "danger";

interface ButtonPropsI {
	content: string;
	disabled: boolean;
	buttonStyle: ButtonStylesT;
	// eslint-disable-next-line no-unused-vars
	onClick?: (e: React.MouseEvent) => void;
}

function Button({ content, buttonStyle, disabled, onClick }: ButtonPropsI): JSX.Element {
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
