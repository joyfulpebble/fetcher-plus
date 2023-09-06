import { useState } from "react";

import { IconPlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";
import Modal from "../../../../../../../UI/Modal/Modal";

export const Headers = () => {
	const [newHeaderModalView, setNewHeaderModalView] = useState(false);

	return (
		<>
			<Modal
				title="New header"
				visibility={newHeaderModalView}
				onCancel={() => true}
				onSubmit={() => true}
				onClose={() => setNewHeaderModalView(false)}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between"
					}}
				>
					Text
				</div>
			</Modal>
			<section className="request_additional_option_header_wrapper">
				<span className="request_additional_option_name">Headers</span>
				<div className="request_additional_option_controls">
					<div className="add_new">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Add new"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
						>
							<IconPlus
								size={16}
								stroke={2}
								onClick={() => {
									setNewHeaderModalView(true);
								}}
							/>
						</Tippy>
					</div>
					<div className="delete_all">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Clear all"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
							offset={[-15, 10]}
						>
							<IconTrash
								size={16}
								stroke={2}
								onClick={() => {}}
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section
			// className={`${
			// 	queryParams.length ? "query_params_body_wrapper" : "query_params_body_wrapper_empty"
			// }`}
			>
				{/* {queryParams.length ? (
					<ParamsList />
				) : (
					<ParamsEmptyList openModalFunc={setNewParameterModalView} />
				)} */}
			</section>
		</>
	);
};
