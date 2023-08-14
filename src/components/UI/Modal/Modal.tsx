import { IconX } from "@tabler/icons-react";
import Button from "../Buttons/Button";
import { AnimatePresence, motion } from "framer-motion";

import "./Modal.scss";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface ModalPropsI {
	title: string;
	visibility: boolean;
	setVisibility: Dispatch<SetStateAction<boolean>>;
	onClose?: () => void;
	onSubmit?: () => void;
	onCancel?: () => void;
	children: JSX.Element | JSX.Element[];
}

function Modal({
	title,
	visibility,
	children,
	setVisibility,
	onCancel,
	onSubmit,
	onClose
}: ModalPropsI) {
	const testref = useRef(null);

	useOutsideClick(testref, () => {
		setVisibility(false);
	});

	return (
		<>
			<AnimatePresence>
				{visibility && (
					<motion.div
						key={"modal_layer"}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.3,
							ease: "easeOut"
						}}
						exit={{ opacity: 0 }}
						className="modal_layer"
					>
						<motion.div
							ref={testref}
							key={"modal_wrapper"}
							animate={{ scale: [0.7, 1.05, 1] }}
							transition={{
								duration: 0.2,
								ease: "easeInOut"
							}}
							exit={{ scale: 0.6, opacity: 0 }}
							className="modal_wrapper"
						>
							<section className="modal_header">
								<div className="modal_title">{title}</div>
								<IconX
									className="modal_close"
									size={20}
									stroke={2}
									onClick={() => {
										if (onClose) onClose();
										setVisibility(false);
									}}
								/>
							</section>
							<section className="modal_body">{children}</section>
							<section className="modal_footer">
								<div className="modal_controls">
									<Button
										buttonStyle="secondary"
										content="Cancel"
										onClick={() => {
											if (onCancel) onCancel();
											setVisibility(false);
										}}
									/>
									<Button
										buttonStyle="primary"
										content="Submit"
										onClick={() => {
											if (onSubmit) onSubmit();
											setVisibility(false);
										}}
									/>
								</div>
							</section>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Modal;
