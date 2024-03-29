import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import { IconX } from "@tabler/icons-react";
import Button from "../Buttons/Button";

import { AnimatePresence, motion } from "framer-motion";

import "./Modal.scss";
// eslint-disable-next-line no-duplicate-imports
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface ModalPropsI {
	title: string;
	subtitle?: string;
	visibility: boolean;
	onClose: () => void;
	onSubmit: () => boolean;
	onCancel: () => boolean;
	children: JSX.Element | JSX.Element[];
}

function Modal({
	title,
	subtitle,
	visibility,
	children,
	onCancel,
	onSubmit,
	onClose
}: ModalPropsI) {
	const modalLayerRef = useRef<HTMLDivElement>(null);

	useOutsideClick(modalLayerRef, () => {
		onClose();
	});

	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				event.preventDefault();

				console.log("enter");

				if (visibility) {
					onSubmit();
					onClose();
				}
			}
		};

		if (modalLayerRef && modalLayerRef.current) {
			modalLayerRef.current.addEventListener("keydown", keyDownHandler);
		}

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	});

	return (
		<>
			{createPortal(
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
							id="modal_layer"
							className="modal_layer"
						>
							<motion.div
								ref={modalLayerRef}
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
									<div className="modal_titles_wrapper">
										<div className="modal_title">{title}</div>
										<div className="modal_subtitle">{subtitle}</div>
									</div>
									<IconX
										className="modal_close"
										size={20}
										stroke={2}
										onClick={() => {
											onClose();
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
												onClose();
											}}
										/>
										<Button
											buttonStyle="primary"
											content="Submit"
											onClick={() => {
												if (onSubmit()) onClose();
											}}
										/>
									</div>
								</section>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
}

export default Modal;
