import Statusbar from "../components/layouts/Statusbar";

import classes from "./styles/Workspace.module.scss";
import RedirectButton from "../components/UI/Buttons/RedirectButton";

function Workspace(): JSX.Element {
	return (
		<>
			<section className={classes.Layout}>
				<div className={classes.Sidebar}>Sidebar</div>
				<div className={classes.Collections}>Collections</div>
				<div className={classes.MainProcess}>Body</div>
				<div className={classes.Response}>SecondarySidebar</div>
			</section>
			<section>
				<RedirectButton
					style={{ position: "absolute", bottom: 0, right: 0 }}
					path="/home"
					content={"go home"}
				/>
				<Statusbar className={classes.footer} />
			</section>
		</>
	);
}

export default Workspace;
