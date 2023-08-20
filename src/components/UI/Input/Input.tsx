import { RefObject } from "react";
import { useClassnames } from "../../../hooks/useClassnames";
import "./Input.scss";

interface InputPropsI extends React.HTMLProps<HTMLInputElement> {
	innerRef?: RefObject<HTMLInputElement>;
	placeholder: string;
	label: string;
	error: { is: boolean; text: string };
	disabled?: boolean;
	// eslint-disable-next-line no-unused-vars
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
	innerRef,
	placeholder,
	disabled = false,
	error,
	label,
	onChange,
	...props
}: InputPropsI): JSX.Element {
	const inputClasses = useClassnames("input", {
		error: error.is
	});

	return (
		<>
			<div>
				<div className="input_label">{label}</div>
				<input
					{...props}
					ref={innerRef}
					disabled={disabled}
					className={inputClasses}
					placeholder={placeholder}
					onChange={(event) => {
						if (!!onChange) return onChange(event);
					}}
				/>
			</div>
			{error.is && <div className="error_text">{error.text}</div>}
		</>
	);
}

export default Input;
