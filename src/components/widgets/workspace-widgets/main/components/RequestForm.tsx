import { useForm } from "../../../../../hooks/useForm";
import { useAppSelector } from "../../../../../hooks/redux/redux";

import Button from "../../../../UI/Buttons/Button";
import MethodSelect from "./MethodSelect/MethodSelect";
import RequestInput from "./RequestInput/RequestInput";

import "./RequestForm.scss";

import type { APIT } from "../../../../../types/api";
import { useRef } from "react";
import { AdditionalOptions } from "./RequestAdditionalOptions/AdditionalOptions";

function RequestForm(): JSX.Element {
	const { requestMethod, requestParams } = useAppSelector((state) => state.requestConfigReducer);
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

							console.table([values.current]);
						}}
					/>
				</section>
				<section className={"extra_options_wrapper"}>
					<AdditionalOptions />
				</section>
			</div>
		</>
	);
}

export default RequestForm;
