import "./styles/Button.scss";

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
				className={"button primary"}
			>
				{content}
			</button>
		</>
	);
}

export default Button;
