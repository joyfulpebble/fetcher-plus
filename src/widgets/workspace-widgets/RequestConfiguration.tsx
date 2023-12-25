import RequestUrlBar from "./RequestUrlBar/RequestUrlBar";
import AdditionalOptions from "./RequestAdditionalOptions/RequestAdditionalOptions";

import "./RequestConfiguration.scss";

function RequestForm(): JSX.Element {
	return (
		<>
			<div className={"request_configuration_wrapper"}>
				<section className={"url_bar_wrapper"}>
					<RequestUrlBar />
				</section>
				<section className={"additional_options_wrapper"}>
					<AdditionalOptions />
				</section>
			</div>
		</>
	);
}

export default RequestForm;
