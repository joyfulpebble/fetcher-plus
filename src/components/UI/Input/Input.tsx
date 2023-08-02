import type { ElementsT } from "../../../types/elements";

import "./Input.scss";

function Input({ ref }: ElementsT.InputPropsI): JSX.Element {
	return (
		<input
			className={"input"}
			ref={ref}
		/>
	);
}

export default Input;
