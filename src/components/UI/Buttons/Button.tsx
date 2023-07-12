import classes from "./Button.module.scss";

type ButtonStylesT = "primary" | "secondary" | "danger";
type BuyttonTypeT = "default" | "link";

interface ButtonPropsI extends React.HTMLAttributes<HTMLDivElement> {
	content: string;
	disabled?: boolean;
	buttonStyle?: ButtonStylesT;
	butonType?: BuyttonTypeT;
}

function Button({ content, buttonStyle, disabled, butonType }: ButtonPropsI): JSX.Element {
	return (
		<>
			<div className={`${classes.Button} ${classes.Primary}`}>{content}</div>
		</>
	);
}

export default Button;
