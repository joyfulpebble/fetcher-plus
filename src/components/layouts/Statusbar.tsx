import { useAppSelector } from "../../hooks/redux/redux";

import ErrorTippy from "../UI/Tippy/ErrorTippy";

import { useOnlineStatus } from "../../hooks/react/useOnlineStatus";
import NetConnectionContainer from "../UI/containers/NetConnectionContainer";

import classes from "./Statusbar.module.scss";

function Statusbar({ ...props }): JSX.Element {
	const isOnline: boolean = useOnlineStatus();
	const errorsArray = useAppSelector((state) => state.requestError).errors;

	return (
		<div className={classes.StatusBarWrapper}>
			<ErrorTippy errorCount={errorsArray.length} />
			<div className={classes.InternetConnectionTippyWrapper}>
				<NetConnectionContainer isOnline={isOnline} />
			</div>
		</div>
	);
}

export default Statusbar;
