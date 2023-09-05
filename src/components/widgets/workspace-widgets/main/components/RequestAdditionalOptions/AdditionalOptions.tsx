import { useState } from "react";
import { motion } from "framer-motion";

import "./AdditionalOptions.scss";
import { Params } from "./components/QueryParams/Params";

export const AdditionalOptions = () => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const optionsTabs = ["Parameters", "Body", "Headers", "Authorization"];
	const optionElements = [<Params key={"params_tab"} />];

	return (
		<>
			<section className="request_additional_options_header">
				{optionsTabs.map((tab, index) => (
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
