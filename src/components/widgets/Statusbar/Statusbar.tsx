import { useAppSelector } from "../../../hooks/redux/redux";

import ErrorTippy from "../../UI/Tippy/ErrorTippy";

import { useOnlineStatus } from "../../../hooks/react/useOnlineStatus";
import NetConnectionContainer from "../../UI/containers/NetConnectionContainer";

import "./Statusbar.scss";

function Statusbar({ ...props }): JSX.Element {
	const isOnline: boolean = useOnlineStatus();
	const errorsArray = useAppSelector((state) => state.requestError).errors;

	return (
		<div className={"statusbar_wrapper"}>
			<ErrorTippy errorCount={errorsArray.length} />
			<div className={"net_connection"}>
				<NetConnectionContainer isOnline={isOnline} />
			</div>
		</div>
	);
}

export default Statusbar;
