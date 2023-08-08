import "./RequestInput.scss";

interface RequestInputPropsI extends React.HTMLProps<HTMLInputElement> {
	inputRef: React.RefObject<HTMLInputElement>;
}

function RequestInput({ inputRef, ...props }: RequestInputPropsI) {
	return (
		<>
			<input
				className="request_input"
				ref={inputRef}
				{...props}
			></input>
		</>
	);
}

export default RequestInput;
