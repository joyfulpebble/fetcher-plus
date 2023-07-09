import Statusbar from "../components/layouts/Statusbar";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import classes from "./styles/Workspace.module.scss";
import RedirectButton from "../components/UI/Buttons/RedirectButton";

function Workspace(): JSX.Element {
	return (
		<>
			<div className={classes.WorkspaceWrapper}>
				<section className={classes.Header}>
					<RedirectButton
						path="/home"
						content={"go home"}
					/>
				</section>
				<section className={classes.Layout}>
					<div className={classes.Sidebar}>Sidebar</div>
					<Allotment>
						<div className={classes.Collections}>Collections</div>
						<div className={classes.MainProcess}>Body</div>
						<div className={classes.Response}>SecondarySidebar</div>
					</Allotment>
				</section>
				<Statusbar className={classes.Footer} />
			</div>
		</>
	);
}

export default Workspace;
