import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";

import { getConfigSlice } from "../../redux/reducers/getConfigSlice";
import { useAppDispatch } from "../../hooks/redux/redux";

import { Entries } from "type-fest";
import {
	DynamicObjectKeysI,
	MainInfoOfRequestFromFieldsI,
	InfoOfParamsFromFieldsI,
	RequestHistoryItemI
} from "../../types/simple_models";

import CustomButton from "../UI/Buttons/PrimaryButton";
import LinkButton from "../UI/Buttons/RedirectButton";
import FormWithTwoFields from "../FormWithTwoFields";
import Switch from "../UI/Switch/Switch";
import ParamsList from "../ParamsList";

import classes from "./GetForm.module.scss";
import { idb_set } from "../../tools/idb-tools/idbMethods";
import { request_history_db } from "../../hooks/idb/request-history-db";

function GetForm(): JSX.Element {
	const [parameters, setParameters] = useState<DynamicObjectKeysI>({}),
		[displayedParameters, setDisplayedParameters] = useState<
			Entries<typeof parameters>
		>([]),
		[needParameters, setNeedParameters] = useState<boolean>(false),
		[needRedirect, setNeedRedirect] = useState<boolean>(false),
		displayedParameterNameRef = useRef<HTMLInputElement>(null),
		displayedParameterValueRef = useRef<HTMLInputElement>(null),
		{ updateConfig } = getConfigSlice.actions,
		dispatch = useAppDispatch(),
		handleSubmitParams = (values: InfoOfParamsFromFieldsI): void => {
			parameters[values.parameter_name] = values.parameter_value;

			const parametersMatrix = Object.entries(parameters);
			setDisplayedParameters(parametersMatrix);
		},
		handleSubmitFetch = (values: MainInfoOfRequestFromFieldsI): void => {
			if (!values.request_name && values.request_url)
				return console.error("не все поля заполнены");

			const request_id: number = new Date().getTime(),
				request_date: string = new Date().toLocaleString("en-GB", {
					timeZone: "UTC"
				}),
				request_time: string = new Date().toLocaleTimeString("en-GB"),
				requestHistoryItem: RequestHistoryItemI = {
					date: request_date,
					time: request_time,
					name: values.request_name,
					url: values.request_url,
					parameters: parameters ? parameters : {}
				};

			idb_set(request_id, requestHistoryItem, request_history_db, "history");
			dispatch(
				updateConfig({
					url: values.request_url,
					params: parameters,
					request_name: values.request_name
				})
			);
			setNeedRedirect(true);
		};

	return (
		<div className={classes.PageWrapper}>
			<div className={classes.SettingsWrapper}>
				<FormWithTwoFields
					firstInitValueName={"request_url"}
					secondInitValueName={"request_name"}
					firstInitValue={"https://jsonplaceholder.typicode.com/posts"}
					secondInitValue={"asd"}
					firstInfoText={"Fetch url:"}
					secondInfoText={"File name:"}
					onSubmitFuncton={handleSubmitFetch}
					formId={"main-request-data"}
				/>
				<div className={classes.ButtonsWrapper}>
					<Switch
						needParameters={needParameters}
						spanText={"Need parameters?"}
						handleIsCheckedParameters={() => {
							setNeedParameters(!needParameters);
						}}
					/>
				</div>
				<div
					className={`${classes.ParametersWrapper} ${
						needParameters ? classes.active : ""
					}`}
				>
					<FormWithTwoFields
						firstInitValueName={"parameter_name"}
						secondInitValueName={"parameter_value"}
						firstInitValue={"_limit"}
						secondInitValue={1}
						firstInfoText={"Parameter name:"}
						secondInfoText={"Parameter value:"}
						firstRef={displayedParameterNameRef}
						secondRef={displayedParameterValueRef}
						onSubmitFuncton={handleSubmitParams}
						formId={"parameters-data"}
					/>
					<div className={classes.ParametersAddButton}>
						<CustomButton
							children={"Add parameter"}
							type={"submit"}
							form={"parameters-data"}
						/>
					</div>
					<div className={classes.ParametersList}>
						<ParamsList
							displayedParameters={displayedParameters}
							setDisplayedParameters={setDisplayedParameters}
							parameters={parameters}
							setParameters={setParameters}
						/>
					</div>
				</div>
				<div>
					<CustomButton
						children={"Submit"}
						type={"submit"}
						form={"main-request-data"}
					/>
					<LinkButton
						content={"Go home"}
						path={"/welcome"}
					/>
				</div>
				{needRedirect ? <Navigate to="/workspace" /> : <></>}
			</div>
		</div>
	);
}

export default GetForm;
