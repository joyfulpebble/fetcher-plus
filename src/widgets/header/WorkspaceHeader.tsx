import RedirectButton from "../../components/ui/Buttons/RedirectButton";
import "./WorkspaceHeader.scss";

function WorkspaceHeader() {
	return (
		<>
			<div className={"header"}>
				<RedirectButton
					redirectPath="/"
					content={"Back to main page"}
					buttonStyle="secondary"
				/>
			</div>
		</>
	);
}

export default WorkspaceHeader;
