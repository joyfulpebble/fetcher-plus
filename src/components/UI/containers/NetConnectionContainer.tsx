import type { ElementsT } from "../../../types/elements";
import OfflineTippy from "../Tippy/OfflineTippy";
import OnlineTippy from "../Tippy/OnlineTippy";

function NetConnectionContainer({ isOnline }: ElementsT.NetConnetctionProps) {
	return <>{isOnline ? <OnlineTippy /> : <OfflineTippy />}</>;
}

export default NetConnectionContainer;
