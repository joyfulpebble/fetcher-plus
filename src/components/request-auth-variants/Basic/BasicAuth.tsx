import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestAuthBasicSlice from "../../../redux/reducers/requestAuthBasicSlice";

import Input from "../../ui/Input/Input";

function BasicAuth() {
	const dispatch = useAppDispatch();
	const basicAuth = useAppSelector((state) => state.requestAuthBasicReducer);
	const { updateBasicAuthKey, updateBasicAuthValue } = requestAuthBasicSlice.actions;

	return (
		<>
			<section
				style={{
					marginTop: "5px",
					height: "74px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between"
				}}
			>
				<Input
					placeholder="Key"
					value={basicAuth.key}
					onChange={(event) => dispatch(updateBasicAuthKey(event.target.value))}
				/>
				<Input
					placeholder="Value"
					value={basicAuth.value}
					onChange={(event) => dispatch(updateBasicAuthValue(event.target.value))}
				/>
			</section>
		</>
	);
}

export default BasicAuth;
