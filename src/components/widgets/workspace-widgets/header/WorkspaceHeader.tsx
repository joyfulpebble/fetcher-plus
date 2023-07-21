import RedirectButton from "../../../UI/Buttons/RedirectButton";

import "./WorkspaceHeader.scss";

function WorkspaceHeader() {
	return (
		<>
			<div className={"header"}>
				<RedirectButton
					path="/home"
					content={"go home"}
				/>
			</div>
		</>
	);
}

export default WorkspaceHeader;
