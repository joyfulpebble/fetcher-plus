import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestAuthBearerSlice from "../../../redux/reducers/requestAuthBearerSlice";

import Input from "../../ui/Input/Input";

function BearerAuth() {
	const dispatch = useAppDispatch();
	const bearerAuthToken = useAppSelector((state) => state.requestAuthBearerReducer);
	const { updateAuthBearerToken } = requestAuthBearerSlice.actions;

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
					placeholder="Token"
					value={bearerAuthToken}
					onChange={(event) => dispatch(updateAuthBearerToken(event.target.value))}
				/>
			</section>
		</>
	);
}

export default BearerAuth;
