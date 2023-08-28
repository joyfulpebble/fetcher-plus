import { IconTrash, IconPlus } from "@tabler/icons-react";

import "./ExtraParams.scss";
import { ParamsList } from "./ParamsList";

export const Params = () => (
	<>
		<section className="extra_option_element_header_wrapper">
			<span className="extra_option_name">Query Parameters</span>
			<div className="extra_option_controls">
				<IconPlus
					className="add_new_param"
					style={{ cursor: "pointer" }}
					size={16}
					stroke={2}
				/>
				<IconTrash
					className="delete_all_params"
					style={{ cursor: "pointer" }}
					size={16}
					stroke={2}
				/>
			</div>
		</section>
		<section className="extra_option_element_body_wrapper">
			<ParamsList />
		</section>
	</>
);
