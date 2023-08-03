import ErrorTippy from "../../UI/Tippy/ErrorTippy";

import { useOnlineStatus } from "../../../hooks/react/useOnlineStatus";
import NetConnectionContainer from "../../UI/containers/NetConnectionContainer";

import "./Statusbar.scss";

function Statusbar(): JSX.Element {
	const isOnline: boolean = useOnlineStatus();

	return (
		<div className={"statusbar_wrapper"}>
			<ErrorTippy errorCount={0} />
			<div className={"net_connection"}>
				<NetConnectionContainer isOnline={isOnline} />
			</div>
		</div>
	);
}

export default Statusbar;
