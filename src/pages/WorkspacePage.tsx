import WorkspaceHeader from "../widgets/header/WorkspaceHeader";
import WorkspaceSidebar from "../widgets/sidebar-navigation/WorkspaceSidebarNavigation";
import Statusbar from "../widgets/statusbar-widgets/Statusbar";
import WorkspaceMain from "../widgets/workspace-widgets/WorkspaceMain";

import "./styles/WorkspacePage.scss";

function WorkspacePage(): JSX.Element {
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

export default WorkspacePage;
