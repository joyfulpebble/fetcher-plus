import { useAppDispatch, useAppSelector } from "../../../hooks/redux/redux";

import requestUrlSlice from "../../../redux/reducers/requestUrlSlice";

import MethodSelect from "../RequestMethodSelect/RequestMethodSelect";
import Button from "../../../components/ui/Buttons/Button";
import Input from "../../../components/ui/Input/Input";

import Service from "../../../API/Service";
import { APIT } from "../../../types/api";

function RequestUrlBar() {
	const dispatch = useAppDispatch();
	const { updateUrl } = requestUrlSlice.actions;

	const url = useAppSelector((state) => state.requestUrlReducer);
	const method = useAppSelector((state) => state.requestSelctedMethod);
	const params = useAppSelector((state) => state.requestQueryParameters);
	const headers = useAppSelector((state) => state.requestHeadersSlice);
	const body_type = useAppSelector((state) => state.requestBodyTypeReducer);

	const requestFormDataBody = useAppSelector((state) => state.requestBodyFormDataReducer);
	const requestUrlEncodedBody = useAppSelector((state) => state.requestBodyUrlEncodedReducer);
	const rawBodyContent = useAppSelector((state) => state.requestBodyRawContentReducer);

	const request_data = {
		"none": null,
		"form-data": requestFormDataBody,
		"raw": rawBodyContent,
		"x-www-form-urlencoded": requestUrlEncodedBody
	};

	return (
		<>
			<div className={"request_url_bar"}>
				<MethodSelect />
				<Input
					className="request_url"
					placeholder="URL"
					value={url}
					onChange={(event) => {
						dispatch(updateUrl(event?.target.value));
					}}
				/>
			</div>
			<Button
				content="Send"
				buttonStyle="primary"
				disabled={false}
				onClick={async () => {
					const API = new Service({
						url,
						method,
						params,
						headers,
						body: {
							data: request_data[body_type.contentType] as APIT.ConfigBodyData,
							data_type: body_type.contentType,
							raw_data_type: body_type.rawType
						}
					});

					const res = await API.doRequest();
					// console.log(API.getRequestConfig);
					// console.log(res);
				}}
			/>
		</>
	);
}

export default RequestUrlBar;
