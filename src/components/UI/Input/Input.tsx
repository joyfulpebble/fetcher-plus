import { useClassnames } from "../../../hooks/useClassnames";
import "./Input.scss";

interface InputPropsI extends React.HTMLProps<HTMLInputElement> {
	placeholder: string;
	label: string;
	inputRef: React.RefObject<HTMLInputElement>;
	error: boolean;
	disabled?: boolean;
	// eslint-disable-next-line no-unused-vars
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
	inputRef,
	placeholder,
	disabled = false,
	error = false,
	label,
	onChange,
	...props
}: InputPropsI): JSX.Element {
	const inputClasses = useClassnames("input", {
		error: error
	});

	return (
		<div>
			<div
				className="input_label"
				onClick={() => inputRef.current!.focus()}
			>
				{label}
			</div>
			<input
				disabled={disabled}
				className={inputClasses}
				ref={inputRef}
				placeholder={placeholder}
				onChange={(event) => {
					if (!!onChange) return onChange(event);
				}}
			/>
		</div>
	);
}

export default Input;
