import Button from "../../../../UI/Buttons/Button";
import Input from "../../../../UI/Input/Input";

import classes from "./RequestForm.module.scss";

function RequestForm() {
	return (
		<>
			<div className={classes.FormWrapper}>
				<div className={classes.RequestConfigWrapper}>
					<select></select>
					<Input />
				</div>
				<Button content="Send" />
			</div>
		</>
	);
}

export default RequestForm;
