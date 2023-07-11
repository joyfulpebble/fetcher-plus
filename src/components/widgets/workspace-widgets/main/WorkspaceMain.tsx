import { Allotment, setSashSize } from "allotment";
import RequestForm from "./components/RequestForm";

import "allotment/dist/style.css";
import "./WorkspaceMain.module.scss";

function WorkspaceMain() {
	setSashSize(4);
	return (
		<>
			<Allotment defaultSizes={[300, 800, 700]}>
				<Allotment.Pane minSize={300}>
					<div>Collections</div>
				</Allotment.Pane>
				<Allotment.Pane minSize={0}>
					<RequestForm></RequestForm>
				</Allotment.Pane>
				<Allotment.Pane minSize={1}>
					<div>Response</div>
				</Allotment.Pane>
			</Allotment>
		</>
	);
}

export default WorkspaceMain;
