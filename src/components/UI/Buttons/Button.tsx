import { useClassNames } from "../../../hooks/useClassNames";
import "./styles/Button.scss";

type ButtonStylesT = "primary" | "secondary" | "danger";
type BuyttonTypeT = "default" | "link";

interface ButtonPropsI {
	content: string;
	disabled: boolean;
	buttonStyle: ButtonStylesT;
	butonType: BuyttonTypeT;
	// eslint-disable-next-line no-unused-vars
	onClick?: (e: React.MouseEvent) => void;
}

function Button({ content, buttonStyle, disabled, butonType, onClick }: ButtonPropsI): JSX.Element {
	const classnames = useClassNames();
	const className: string = classnames("button", {
		danger: buttonStyle === "danger",
		primary: buttonStyle === "primary",
		secondary: buttonStyle === "secondary"
	});

	return (
		<>
			<button
				disabled={disabled}
				className={className}
				onClick={onClick}
			>
				{content}
			</button>
		</>
	);
}

export default Button;
