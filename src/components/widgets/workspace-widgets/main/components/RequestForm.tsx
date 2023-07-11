import RequestInput from "./request-input/RequestInput";

import classes from "./RequestForm.module.scss";

function RequestForm() {
	return (
		<>
			<div className={classes.FormWrapper}>
				<div className={classes.RequestConfigWrapper}>
					<select></select>
					<RequestInput />
				</div>
			</div>
		</>
	);
}

export default RequestForm;
