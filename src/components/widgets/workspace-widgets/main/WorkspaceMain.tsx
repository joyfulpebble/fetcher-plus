import { Allotment } from "allotment";
import "allotment/dist/style.css";

import classes from "./WorkspaceMain.module.scss";

function WorkspaceMain() {
	return (
		<>
			<Allotment>
				<div className={classes.Collections}>Collections</div>
				<div className={classes.Request}>Body</div>
				<div className={classes.Response}>SecondarySidebar</div>
			</Allotment>
		</>
	);
}

export default WorkspaceMain;
