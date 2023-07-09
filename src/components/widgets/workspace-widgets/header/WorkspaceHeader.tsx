import RedirectButton from "../../../UI/Buttons/RedirectButton";

import classes from "./WorkspaceHeader.module.scss";

function WorkspaceHeader() {
	return (
		<>
			<div className={classes.Header}>
				<RedirectButton
					path="/home"
					content={"go home"}
				/>
			</div>
		</>
	);
}

export default WorkspaceHeader;
