import { IconChevronDown, IconFilePlus, IconTrash } from "@tabler/icons-react";
import Tippy from "@tippyjs/react";

import "./styles/Body.scss";
import { BodyContentTypesList } from "./BodyContentTypesList";
import { useAppSelector } from "../../../../../../../../hooks/redux/redux";
import { BodyRawTypesList } from "./BodyRawTypesList";

export const Body = () => {
	const { contentType, rawType } = useAppSelector((state) => state.requestBodyTypeReducer);

	return (
		<>
			<section className="request_additional_option_header_wrapper">
				<div className="body_conntent_type_select_wrapper">
					<span className="request_additional_option_name">Body</span>
					<div className="request_additional_body_type">
						<Tippy
							className="body_content_type_tippy_wrapper"
							placement="bottom"
							content={<BodyContentTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[49, 5]}
						>
							<div className="body_content_type_select">
								<span className="body_content_type">{contentType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					</div>
					{contentType === "raw" && (
						<Tippy
							className="body_raw_type_tippy_wrapper"
							placement="bottom"
							content={<BodyRawTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[15, 5]}
						>
							<div className="body_raw_type_select">
								<span className="body_raw_type">{rawType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					)}
				</div>
				<div className="request_additional_option_controls">
					<div className="add_new">
						<Tippy
							className="base_tippy_wrapper"
							placement="top"
							content={"Import"}
							animation="shift-away"
							arrow={true}
							trigger="mouseenter"
							zIndex={0}
						>
							<IconFilePlus
								size={16}
								stroke={2}
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
							/>
						</Tippy>
					</div>
				</div>
			</section>
			<section className="headers_body_wrapper"></section>
		</>
	);
};
