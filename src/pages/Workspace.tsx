import WorkspaceHeader from "../components/widgets/workspace-widgets/header/WorkspaceHeader";
import WorkspaceSidebar from "../components/widgets/workspace-widgets/sidebar/WorkspaceSidebar";
import WorkspaceMain from "../components/widgets/workspace-widgets/main/WorkspaceMain";
import Statusbar from "../components/widgets/Statusbar/Statusbar";

import classes from "./styles/Workspace.module.scss";

function Workspace(): JSX.Element {
	return (
		<>
			<div className={classes.WorkspacePageWrapper}>
				<WorkspaceHeader />
				<section className={classes.WorkspaceMainLayout}>
					<WorkspaceSidebar />
					<WorkspaceMain />
				</section>
				<Statusbar className={classes.Footer} />
			</div>
		</>
	);
}

export default Workspace;
