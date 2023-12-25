import { RefObject } from "react";
import { useClassnames } from "../../../hooks/useClassnames";
import "./Input.scss";

interface InputPropsI extends React.HTMLProps<HTMLInputElement> {
	innerRef?: RefObject<HTMLInputElement>;
	placeholder: string;
	error?: string | null;
	label?: string;
	disabled?: boolean;
	inputStyle?: "invisible" | "default";
	className?: string; // eslint-disable-next-line no-unused-vars
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
	innerRef,
	placeholder,
	disabled = false,
	error,
	label,
	onChange,
	inputStyle = "default",
	className,
	...props
}: InputPropsI): JSX.Element {
	const inputClasses = useClassnames({
		error: !!error,
		input_invisible: inputStyle === "invisible",
		input_default: inputStyle === "default"
	});

	return (
		<>
			<div style={{ width: "100%" }}>
				{label && (
					<div
						className="input_label"
						onClick={() => {
							innerRef?.current?.focus();
						}}
					>
						{label}
					</div>
				)}
				<input
					{...props}
					ref={innerRef}
					disabled={disabled}
					className={`${className} ${inputClasses}`}
					placeholder={placeholder}
					onChange={(event) => {
						if (!!onChange) return onChange(event);
					}}
				/>
			</div>
			{!!error && <div className="input_error_text">{error}</div>}
		</>
	);
}

export default Input;
