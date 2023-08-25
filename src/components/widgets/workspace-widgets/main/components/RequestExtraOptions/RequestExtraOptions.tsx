import { useState } from "react";
import { motion } from "framer-motion";

import "./RequestExtraOptions.scss";

export const RequestExtraOptions = () => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const tabs = ["Parameters", "Body", "Headers", "Authorization"];

	return (
		<>
			<section className="request_extra_options_header">
				{tabs.map((tab, index) => (
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
				<span className="extra_option_name">{tabs[selectedTab]}</span>
			</section>
		</>
	);
};
