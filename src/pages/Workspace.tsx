import WorkspaceHeader from "../components/widgets/workspace-widgets/header/WorkspaceHeader";
import WorkspaceSidebar from "../components/widgets/workspace-widgets/sidebar/WorkspaceSidebar";
import WorkspaceMain from "../components/widgets/workspace-widgets/main/WorkspaceMain";
import Statusbar from "../components/widgets/Statusbar/Statusbar";

import "./styles/Workspace.scss";

function Workspace(): JSX.Element {
	return (
		<>
			<div className={"workspace_wrapper"}>
				<WorkspaceHeader />
				<section className={"workspace_main_wrapper"}>
					<WorkspaceSidebar />
					<WorkspaceMain />
				</section>
				<Statusbar />
			</div>
		</>
	);
}

export default Workspace;
