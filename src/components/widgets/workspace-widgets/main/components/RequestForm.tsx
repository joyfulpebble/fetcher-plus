import Button from "../../../../UI/Buttons/Button";
import MethodSelect from "./MethodSelect/MethodSelect";

import "./RequestForm.scss";
import RequestInput from "./RequestInput/RequestInput";

function RequestForm() {
	return (
		<>
			<div className={"form_wrapper"}>
				<div className={"request_config_wrapper"}>
					<MethodSelect />
					<RequestInput />
				</div>
				<Button
					content="Send"
					buttonStyle="primary"
					disabled={false}
				/>
			</div>
		</>
	);
}

export default RequestForm;
