import React from "react";

import classes from "./Buttons.module.scss";

function PrimaryButton({ children, ...props }: any): JSX.Element {
	return (
		<button
			{...props}
			className={classes.PrimaryButton}
		>
			{children}
		</button>
	);
}

export default PrimaryButton;
