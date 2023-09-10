import { useState } from "react";
import { motion } from "framer-motion";

import { Params } from "./components/QueryParams/Params";
import { Headers } from "./components/Headers/Headers";

import "./AdditionalOptions.scss";

export const AdditionalOptions = () => {
	const [selectedTab, setSelectedTab] = useState<number>(2);

	const optionsTabNames = ["Parameters", "Body", "Headers", "Authorization"];
	const optionElements = [<Params key="params_tab" />, <></>, <Headers key="headers_tab" />, <></>];

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
