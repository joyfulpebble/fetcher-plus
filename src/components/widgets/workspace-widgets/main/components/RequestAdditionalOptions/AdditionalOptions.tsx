import { useState } from "react";
import { motion } from "framer-motion";

import "./AdditionalOptions.scss";
import { Params } from "./components/QueryParams/Params";

export const AdditionalOptions = () => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const optionsTabs = ["Parameters", "Body", "Headers", "Authorization"];
	const optionElements = [<Params key={0} />];

	return (
		<>
			<section className="request_additional_options_header">
				{optionsTabs.map((tab, index) => (
					<div
						key={index}
						className={`additional_options_element`}
						onClick={() => {
							setSelectedTab(index);
						}}
					>
						{tab}
						{index === selectedTab && (
							<motion.div
								className="additional_option_underline"
								layoutId="underline"
							/>
						)}
					</div>
				))}
			</section>
			<section className="request_additional_options_body">
				<span className="additional_option_body">{optionElements[selectedTab]}</span>
			</section>
		</>
	);
};
