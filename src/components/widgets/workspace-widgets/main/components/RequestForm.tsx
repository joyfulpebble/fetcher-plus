import { useForm } from "../../../../../hooks/useForm";
import { useAppSelector } from "../../../../../hooks/redux/redux";

import Button from "../../../../UI/Buttons/Button";
import MethodSelect from "./MethodSelect/MethodSelect";
import RequestInput from "./RequestInput/RequestInput";

import "./RequestForm.scss";

import type { APIT } from "../../../../../types/api";

function RequestForm() {
	const { method } = useAppSelector((state) => state.requestConfigReducer);

	const { values, saveFuildValue } = useForm<APIT.RequestConfigI>({
		initialValues: { method: "GET", params: {}, url: "" }
	});

	return (
		<>
			<div className={"wrapper"}>
				<form className="form_wrapper">
					<div className={"request_config_wrapper"}>
						<MethodSelect />
						<RequestInput />
					</div>
				</form>
				<Button
					content="Send"
					buttonStyle="primary"
					disabled={false}
					onClick={() => {
						saveFuildValue("method", method);
						console.log(
							"@useForm data: " + values.current.method + "\n" + "@redux data: " + method
						);
					}}
				/>
			</div>
		</>
	);
}

export default RequestForm;
