import { v1 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";
import requestAuthBasicSlice from "../../../redux/reducers/requestAuthBasicSlice";
import requestHeadersSlice from "../../../redux/reducers/requestHeadersSlice";

import Input from "../../ui/Input/Input";
import { useEffect } from "react";

function BasicAuth() {
	const dispatch = useAppDispatch();
	const basicAuth = useAppSelector((state) => state.requestAuthBasicReducer);
	const { updateBasicAuthKey, updateBasicAuthValue } = requestAuthBasicSlice.actions;

	// const headers = useAppSelector((state) => state.requestHeadersSlice);
	// const authHeaders = headers.filter((item) => item.key === "Authorization");
	// const { addHeader, updateHeaderValue } = requestHeadersSlice.actions;

	// useEffect(() => {
	// 	if (!headers.length) {
	// 		dispatch(
	// 			addHeader({
	// 				_id: v1(),
	// 				isUsed: true,
	// 				key: "Authorization",
	// 				value: ""
	// 			})
	// 		);
	// 	}
	// }, []);

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
