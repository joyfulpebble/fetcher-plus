import Button from "../../../../UI/Buttons/Button";
import Input from "../../../../UI/Input/Input";

import "./RequestForm.scss";

function RequestForm() {
	return (
		<>
			<div className={"form_wrapper"}>
				<div className={"request_config_wrapper"}>
					<select></select>
					<Input />
				</div>
				<Button content="Send" />
			</div>
		</>
	);
}

export default RequestForm;
