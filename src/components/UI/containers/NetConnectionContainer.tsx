import type { ElementsT } from "../../../types/elements";

import OfflineTippy from "../../UI/Tippy/OfflineTippy";
import OnlineTippy from "../../UI/Tippy/OnlineTippy";

function NetConnectionContainer({ isOnline }: ElementsT.NetConnetctionProps) {
	return <>{isOnline ? <OnlineTippy /> : <OfflineTippy />}</>;
}

export default NetConnectionContainer;
