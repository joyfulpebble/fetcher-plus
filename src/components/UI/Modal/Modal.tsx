import { IconX } from "@tabler/icons-react";
import Button from "../Buttons/Button";

import "./Modal.scss";

interface ModalPropsI {
	showModal: boolean;
	onClose: () => void;
	onSubmit: () => void;
	onCancel: () => void;
	children: JSX.Element | JSX.Element[];
}

function Modal({ showModal, children, onCancel, onSubmit, onClose }: ModalPropsI) {
	if (!showModal) return null;
	const child: Array<JSX.Element> = Array.isArray(children) ? [...children] : [children];

	return (
		<>
			{showModal && (
				<div className="modal_layer">
					<div className="modal_wrapper">
						<section className="modal_header">
							<div className="modal_title">
								<p>Some title</p>
							</div>
							<IconX
								className="modal_close"
								size={20}
								stroke={2}
								onClick={onClose}
							/>
						</section>
						<section className="modal_body">
							{child.map((node: JSX.Element, index: number) => (
								<div
									key={index}
									className="modal_body_element"
								>
									{node}
								</div>
							))}
						</section>
						<section className="modal_footer">
							<div className="modal_controls">
								<Button
									buttonStyle="secondary"
									content="Cancel"
									onClick={onCancel}
								/>
								<Button
									buttonStyle="primary"
									content="Submit"
									onClick={onSubmit}
								/>
							</div>
						</section>
					</div>
				</div>
			)}
		</>
	);
}

export default Modal;
