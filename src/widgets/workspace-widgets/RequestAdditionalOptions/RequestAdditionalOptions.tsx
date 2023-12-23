import { useState } from "react";
import { motion } from "framer-motion";

import "./RequestAdditionalOptions.scss";
import { RequestQueryParams } from "./RequestQueryParams/RequestQueryParams";
import RequestAuth from "./RequestAuth/RequestAuth";
import RequestBody from "./RequestBody/RequestBody";
import RequestHeaders from "./RequestHeaders/RequestHeaders";

const AdditionalOptions = () => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const optionsTabNames = ["Parameters", "Body", "Headers", "Authorization"];
	const optionElements = [
		<RequestQueryParams key="params_tab" />,
		<RequestBody key="body_tab" />,
		<RequestHeaders key="headers_tab" />,
		<RequestAuth key="auth_tab" />
	];

	return (
		<>
			<section className="request_additional_options_tabs">
				{optionsTabNames.map((tab, index) => (
					<div
						key={index}
						className={`request_additional_options_element`}
						onClick={() => {
							setSelectedTab(index);
						}}
					>
						{tab}
						{index === selectedTab && (
							<motion.div
								className="request_additional_option_underline"
								layoutId="underline"
							/>
						)}
					</div>
				))}
			</section>
			<section className="request_additional_options_body">{optionElements[selectedTab]}</section>
		</>
	);
};

export default AdditionalOptions;
