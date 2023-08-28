import { useState } from "react";
import { motion } from "framer-motion";

import "./ExtraOptions.scss";
import { Params } from "./ExtraOptionElements/ExtraParams/Params";

export const ExtraOptions = () => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const optionsTabs = ["Parameters", "Body", "Headers", "Authorization"];
	const optionElements = [<Params key={0} />];

	return (
		<>
			<section className="request_extra_options_header">
				{optionsTabs.map((tab, index) => (
					<div
						key={index}
						className={`extra_options_element ${tab.toLowerCase()} `}
						onClick={() => {
							setSelectedTab(index);
						}}
					>
						{tab}
						{index === selectedTab && (
							<motion.div
								className="extra_option_underline"
								layoutId="underline"
							/>
						)}
					</div>
				))}
			</section>
			<section className="request_extra_options_body">
				<span className="extra_option_body">{optionElements[selectedTab]}</span>
			</section>
		</>
	);
};
