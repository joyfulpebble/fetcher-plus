import WorkspaceHeader from "../widgets/header/WorkspaceHeader";
import WorkspaceResizer from "../widgets/workspace-widgets/WorkspaceResizer";
import WorkspaceSidebar from "../widgets/sidebar-navigation/WorkspaceSidebarNavigation";
import Statusbar from "../widgets/statusbar-widgets/Statusbar";

import "./styles/WorkspacePage.scss";

function WorkspacePage(): JSX.Element {
	return (
		<>
			<div className={"workspace_wrapper"}>
				<WorkspaceHeader />
				<section className={"workspace_main_wrapper"}>
					<WorkspaceSidebar />
					<WorkspaceResizer />
				</section>
				<Statusbar />
			</div>
		</>
	);
}

export default WorkspacePage;
