import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestAuthApiSlice from "../../../redux/reducers/requestAuthApiSlice";

import Input from "../../ui/Input/Input";

function ApiKeyAuth() {
	const dispatch = useAppDispatch();
	const apiAuth = useAppSelector((state) => state.requestAuthApiReducer);
	const { updateApiAuthKey, updateApiAuthValue } = requestAuthApiSlice.actions;

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
					value={apiAuth.key}
					onChange={(event) => dispatch(updateApiAuthKey(event.target.value))}
				/>
				<Input
					placeholder="Value"
					value={apiAuth.value}
					onChange={(event) => dispatch(updateApiAuthValue(event.target.value))}
				/>
			</section>
		</>
	);
}

export default ApiKeyAuth;
