import classes from "./Input.module.scss";

interface InputPropsI extends React.HTMLAttributes<HTMLInputElement> {
	ref?: React.LegacyRef<HTMLInputElement> | undefined;
}

function Input({ ref }: InputPropsI): JSX.Element {
	return (
		<input
			className={classes.Input}
			ref={ref}
		/>
	);
}

export default Input;
