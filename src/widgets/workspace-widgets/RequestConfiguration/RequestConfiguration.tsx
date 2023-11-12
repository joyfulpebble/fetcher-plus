import { useRef } from "react";

import { useForm } from "../../../hooks/useForm";
import { useAppSelector } from "../../../hooks/redux/redux";

import Button from "../../../components/ui/Buttons/Button";

import "./RequestConfiguration.scss";
import type { APIT } from "../../../types/api";
import MethodSelect from "../RequestMethodSelect/RequestMethodSelect";
import RequestInput from "../RequestInput/RequestInput";
import AdditionalOptions from "../RequestAdditionalOptions/RequestAdditionalOptions";

function RequestForm(): JSX.Element {
	const quieryParams = useAppSelector((state) => state.requestQueryParameters);
	const requestHeaders = useAppSelector((state) => state.requestHeadersSlice);
	const requestMethod = useAppSelector((state) => state.requestSelctedMethod);
	const requestFormDataBody = useAppSelector((state) => state.requestBodyFormDataReducer);
	const requestUrlEncodedBody = useAppSelector((state) => state.requestBodyUrlEncodedReducer);
	const rawBodyContent = useAppSelector((state) => state.requestBodyRawContentReducer);

	const { values, saveFuildValue } = useForm<APIT.RequestConfigI>({
		initialValues: { requestMethod: "GET", requestParams: {}, requestUrl: "" }
	});

	const requestUrlref = useRef<HTMLInputElement>(null);

	return (
		<>
			<div className={"request_configuration_wrapper"}>
				<section className={"main_data_wrapper"}>
					<div className={"request_main_data"}>
						<MethodSelect />
						<RequestInput
							inputRef={requestUrlref}
							onChange={() => {
								saveFuildValue("requestUrl", requestUrlref.current?.value);
							}}
						/>
					</div>
					<Button
						content="Send"
						buttonStyle="primary"
						disabled={false}
						onClick={() => {
							saveFuildValue("requestMethod", requestMethod);

							console.log(">selected request method: " + requestMethod);
							console.log(">request url: " + values.current.requestUrl);
							console.log(">request params: ");
							console.table(quieryParams);
							console.log(">request headers: ");
							console.table(requestHeaders);
							console.log(">request `form-data` body: ");
							console.table(requestFormDataBody);
							console.log(">request `url-encoded` body: ");
							console.table(requestUrlEncodedBody);
							console.log(">request `raw` body: ");
							console.table(rawBodyContent);
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
