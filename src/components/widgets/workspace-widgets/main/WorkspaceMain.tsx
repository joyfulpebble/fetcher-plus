import { Allotment, setSashSize } from "allotment";
import RequestForm from "./components/RequestForm";

import "./components/RequestForm.scss";
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
				<Allotment.Pane minSize={410}>
					<RequestForm></RequestForm>
				</Allotment.Pane>
				<Allotment.Pane minSize={390}>
					<div>Response</div>
				</Allotment.Pane>
			</Allotment>
		</>
	);
}

export default WorkspaceMain;
