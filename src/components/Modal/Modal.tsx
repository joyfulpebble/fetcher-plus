import { IconX } from "@tabler/icons-react";
import Button from "../UI/Buttons/Button";

import "./Modal.scss";

interface ModalPropsI {
	children: JSX.Element | JSX.Element[];
}

function Modal({ children }: ModalPropsI) {
	const child = Array.isArray(children) ? [...children] : [children];

	return (
		<>
			<div className="modal_wrapper">
				<section className="modal_header">
					<div className="modal_title">
						<p>Some title</p>
					</div>
					<IconX
						size={20}
						stroke={2}
					/>
				</section>
				<section className="modal_body">
					<section className="modal_content">
						{child.map((node: JSX.Element, index: number) => (
							<div
								key={index}
								className="modal_content_element"
							>
								{node}
							</div>
						))}
					</section>
				</section>
				<section className="modal_controls">
					<Button
						buttonStyle="secondary"
						content="Cancel"
					/>
					<div className="modal_primary_button">
						<Button
							buttonStyle="primary"
							content="Submit"
						/>
					</div>
				</section>
			</div>
		</>
	);
}

export default Modal;
