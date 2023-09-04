import { useClassnames } from "../../../hooks/useClassnames";
import "./styles/Button.scss";

import type { ElementsT } from "../.././../types/elements";

/** TODO:
 * ✓ Сделать для кнопки "invisible" стиль
 * - Сделать возможным прокидывать иконку для кнопки
 */

function Button({ content, buttonStyle, disabled, onClick }: ElementsT.ButtonPropsI): JSX.Element {
	const button_class: string = useClassnames("button", {
		btn_danger: buttonStyle === "danger",
		btn_primary: buttonStyle === "primary",
		btn_secondary: buttonStyle === "secondary",
		btn_invisible: buttonStyle === "invisible"
	});

	return (
		<>
			<button
				disabled={disabled}
				className={button_class}
				onClick={onClick}
			>
				{content}
			</button>
		</>
	);
}

export default Button;
