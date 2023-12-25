import { Allotment, setSashSize } from "allotment";
import RequestConfiguration from "./RequestConfiguration";

import "allotment/dist/style.css";

function WorkspaceMain() {
	setSashSize(4);
	return (
		<>
			<Allotment defaultSizes={[300, 650, 700]}>
				<Allotment.Pane
					minSize={300}
					maxSize={400}
				>
					<div>Collections</div>
				</Allotment.Pane>
				<Allotment.Pane minSize={546}>
					<RequestConfiguration />
				</Allotment.Pane>
				<Allotment.Pane minSize={0}>
					<div>Response</div>
				</Allotment.Pane>
			</Allotment>
		</>
	);
}

export default WorkspaceMain;
