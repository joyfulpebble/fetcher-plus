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
	// eslint-disable-next-line no-unused-vars
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** TODO:
 * - Вынести интерфейс в типы
 * - Добавить к классам инпута приставки [itput_]
 */

function Input({
	innerRef,
	placeholder,
	disabled = false,
	error,
	label,
	onChange,
	inputStyle = "default",
	...props
}: InputPropsI): JSX.Element {
	const inputClasses = useClassnames({
		error: !!error,
		invisible: inputStyle === "invisible",
		default: inputStyle === "default"
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
					className={inputClasses}
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
