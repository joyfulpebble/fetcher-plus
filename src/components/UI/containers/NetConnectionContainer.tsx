import OfflineTippy from "../Tippy/OfflineTippy";
import OnlineTippy from "../Tippy/OnlineTippy";

interface NetConnetctionProps {
	isOnline: boolean;
}

function NetConnectionContainer({ isOnline }: NetConnetctionProps) {
	return <>{isOnline ? <OnlineTippy /> : <OfflineTippy />}</>;
}

export default NetConnectionContainer;
