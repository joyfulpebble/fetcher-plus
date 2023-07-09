import { Allotment, setSashSize } from "allotment";
import "allotment/dist/style.css";

import classes from "./WorkspaceMain.module.scss";

function WorkspaceMain() {
	setSashSize(4);
	return (
		<>
			<Allotment defaultSizes={[300, 800, 700]}>
				<Allotment.Pane minSize={300}>
					<div className={classes.Collections}>Collections</div>
				</Allotment.Pane>
				<Allotment.Pane minSize={0}>
					<div className={classes.Request}>Request</div>
				</Allotment.Pane>
				<Allotment.Pane minSize={1}>
					<div className={classes.Response}>Response</div>
				</Allotment.Pane>
			</Allotment>
		</>
	);
}

export default WorkspaceMain;
