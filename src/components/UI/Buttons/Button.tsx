import classes from "./styles/Button.module.scss";

type ButtonStylesT = "primary" | "secondary" | "danger";
type BuyttonTypeT = "default" | "link";

interface ButtonPropsI extends React.HTMLAttributes<Element> {
	content: string;
	disabled?: boolean;
	buttonStyle?: ButtonStylesT;
	butonType?: BuyttonTypeT;
}

function Button({ content, buttonStyle, disabled, butonType }: ButtonPropsI): JSX.Element {
	return (
		<>
			<button
				disabled={disabled}
				className={`${classes.button} ${classes.primary} `}
			>
				{content}
			</button>
		</>
	);
}

export default Button;
