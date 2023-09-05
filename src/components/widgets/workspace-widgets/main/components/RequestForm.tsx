import { useRef } from "react";

import { useForm } from "../../../../../hooks/useForm";
import { useAppSelector } from "../../../../../hooks/redux/redux";

import { AdditionalOptions } from "./RequestAdditionalOptions/AdditionalOptions";

import Button from "../../../../UI/Buttons/Button";
import MethodSelect from "./MethodSelect/MethodSelect";
import RequestInput from "./RequestInput/RequestInput";

import "./RequestForm.scss";
import type { APIT } from "../../../../../types/api";

function RequestForm(): JSX.Element {
	const quieryParams = useAppSelector((state) => state.requestQueryParameters);
	const { requestParams } = useAppSelector((state) => state.requestConfigReducer);
	const requestMethod = useAppSelector((state) => state.requestSelctedMethod);
	const { values, saveFuildValue } = useForm<APIT.RequestConfigI>({
		initialValues: { requestMethod: "GET", requestParams: {}, requestUrl: "" }
	});

	const requestUrl = useRef<HTMLInputElement>(null);

	return (
		<>
			<div className={"request_form_wrapper"}>
				<section className={"main_data_wrapper"}>
					<div className={"request_main_data"}>
						<MethodSelect />
						<RequestInput
							inputRef={requestUrl}
							onChange={() => {
								saveFuildValue("requestUrl", requestUrl.current?.value);
							}}
						/>
					</div>
					<Button
						content="Send"
						buttonStyle="primary"
						disabled={false}
						onClick={() => {
							saveFuildValue("requestMethod", requestMethod);
							saveFuildValue("requestParams", requestParams);

							console.log(requestMethod);
							console.log(values.current.requestUrl);
							console.table(quieryParams);
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
