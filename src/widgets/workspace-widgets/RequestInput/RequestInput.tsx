import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestUrlSlice from "../../../redux/reducers/requestUrlSlice";
import "./RequestInput.scss";

interface RequestInputPropsI extends React.HTMLProps<HTMLInputElement> {
	inputRef: React.RefObject<HTMLInputElement>;
}

function RequestInput({ inputRef, ...props }: RequestInputPropsI) {
	/**FIXME: */
	const dispatch = useAppDispatch();
	const url = useAppSelector((state) => state.requestUrlReducer);
	const { updateUrl } = requestUrlSlice.actions;
	/**FIXME: */

	return (
		<>
			<input
				className="request_input"
				ref={inputRef}
				{...props}
				/**FIXME: */
				value={url}
				onChange={(event) => {
					dispatch(updateUrl(event?.target.value));
				}}
				/**FIXME: */
			></input>
		</>
	);
}

export default RequestInput;
