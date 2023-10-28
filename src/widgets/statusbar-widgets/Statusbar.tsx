import { useOnlineStatus } from "../../hooks/react/useOnlineStatus";
import "./Statusbar.scss";

function Statusbar(): JSX.Element {
	const isOnline: boolean = useOnlineStatus();

	return (
		<div className={"statusbar_wrapper"}>
			<div className={"net_connection"}>online: {String(isOnline)}</div>
		</div>
	);
}

export default Statusbar;
