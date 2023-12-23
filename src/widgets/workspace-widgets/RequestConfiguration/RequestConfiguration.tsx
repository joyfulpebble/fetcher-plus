import { useRef } from "react";

import { useAppSelector } from "../../../hooks/redux/redux";

import Button from "../../../components/ui/Buttons/Button";

import "./RequestConfiguration.scss";

import MethodSelect from "../RequestMethodSelect/RequestMethodSelect";
import RequestInput from "../RequestInput/RequestInput";
import AdditionalOptions from "../RequestAdditionalOptions/RequestAdditionalOptions";

import Service from "../../../API/Service";

function RequestForm(): JSX.Element {
	const url = useAppSelector((state) => state.requestUrlReducer);
	const method = useAppSelector((state) => state.requestSelctedMethod);

	// const params = useAppSelector((state) => state.requestQueryParameters);
	// const headers = useAppSelector((state) => state.requestHeadersSlice);
	// const requestFormDataBody = useAppSelector((state) => state.requestBodyFormDataReducer);
	// const requestUrlEncodedBody = useAppSelector((state) => state.requestBodyUrlEncodedReducer);
	// const rawBodyContent = useAppSelector((state) => state.requestBodyRawContentReducer);

	const requestUrlref = useRef<HTMLInputElement>(null);

	return (
		<>
			<div className={"request_configuration_wrapper"}>
				<section className={"main_data_wrapper"}>
					<div className={"request_main_data"}>
						<MethodSelect />
						<RequestInput inputRef={requestUrlref} />
					</div>
					<Button
						content="Send"
						buttonStyle="primary"
						disabled={false}
						onClick={async () => {
							const api = new Service();
							const result = await api.get({ url, method });

							console.log(result);
						}}
					/>
				</section>
				<section className={"additional_options_wrapper"}>
					<AdditionalOptions />
				</section>
			</div>
		</>
	);
}

export default RequestForm;
