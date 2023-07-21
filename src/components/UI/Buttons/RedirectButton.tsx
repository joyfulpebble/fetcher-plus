import { Link } from "react-router-dom";

import "./styles/Button.scss";

type ButtonStylesT = "primary" | "secondary" | "danger";
interface RedirectButtonPropsI extends React.HTMLAttributes<HTMLButtonElement> {
	path: string;
	content: string;
	disabled?: boolean;
	buttonStyle?: ButtonStylesT;
}

function RedirectButton({
	path,
	content,
	disabled,
	buttonStyle
}: RedirectButtonPropsI): JSX.Element {
	return (
		<>
			<button className={"button secondary"}>
				<Link to={path}>{content}</Link>
			</button>
		</>
	);
}

export default RedirectButton;
