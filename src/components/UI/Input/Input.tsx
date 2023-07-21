import "./Input.scss";

interface InputPropsI extends React.HTMLAttributes<HTMLInputElement> {
	ref?: React.LegacyRef<HTMLInputElement> | undefined;
}

function Input({ ref }: InputPropsI): JSX.Element {
	return (
		<input
			className={"input"}
			ref={ref}
		/>
	);
}

export default Input;
