import { Link } from "react-router-dom";

import classes from "./Buttons.module.scss";

function RedirectButton({ path, content, style }: any): JSX.Element {
	return (
		<Link
			style={style}
			className={classes.RedirectButton}
			to={path}
		>
			{content}
		</Link>
	);
}

export default RedirectButton;
