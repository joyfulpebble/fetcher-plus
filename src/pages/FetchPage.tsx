import React, { useEffect } from "react";

import Form from "../components/FetchForm";
import Statusbar from "../components/layouts/Statusbar";

import { useAppDispatch } from "../hooks/redux/redux";
import { requestErrorSlice } from "../redux/reducers/requestErrorSlice";

function FetchForm() {
	const { clearErrorStorage } = requestErrorSlice.actions,
		dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(clearErrorStorage());
	}, []);

	return (
		<div>
			<Form />
			<Statusbar />
		</div>
	);
}

export default FetchForm;
