import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux/redux";
import { useClassnames } from "../../../../hooks/useClassnames";

import requestAuthBearerSlice from "../../../../redux/reducers/requestAuthBearerSlice";
import requestAuthApiSlice from "../../../../redux/reducers/requestAuthApiSlice";
import requestAuthBasicSlice from "../../../../redux/reducers/requestAuthBasicSlice";

import Tippy from "@tippyjs/react";
import { IconChevronDown, IconTrash } from "@tabler/icons-react";

import Switch from "../../../../components/ui/Switch/Switch";

import BasicAuth from "../../../../components/request-auth-variants/Basic/BasicAuth";
import ApiKeyAuth from "../../../../components/request-auth-variants/ApiKey/ApiKeyAuth";
import BearerAuth from "../../../../components/request-auth-variants/Bearer/BearerAuth";
import RequestAuthEmpty from "./RequestAuthEmpty";
import RequestAuthTypesList from "../../../../components/lists/RequestAuthTypesList/RequestAuthTypesList";
import RequestAuthApiTypesList from "../../../../components/lists/RequestAuthApiTypesList/RequestAuthApiTypesList";

import "./styles/RequestAuth.scss";
import "../RequestAdditionalOptions.scss";

function RequestAuth() {
	const auth_variants = {
		"none": <RequestAuthEmpty />,
		"api-key": <ApiKeyAuth />,
		"bearer-token": <BearerAuth />,
		"basic-auth": <BasicAuth />
	};

	const { clearApiAuth } = requestAuthApiSlice.actions;
	const { clearAuthToken } = requestAuthBearerSlice.actions;
	const { clearBasicAuth } = requestAuthBasicSlice.actions;

	const auth_values_clear_func = {
		"api-key": clearApiAuth,
		"bearer-token": clearAuthToken,
		"basic-auth": clearBasicAuth
	};

	const dispatch = useAppDispatch();
	const { authType, authApiKeyType } = useAppSelector((state) => state.requestAuthTypeReducer);
	const [authEnabled, setAuthEnabled] = useState<boolean>(false);

	const request_auth_classnames = useClassnames({
		request_body_none_wrapper: authType === "none",
		request_body_wrapper: authType !== "none"
	});

	return (
		<>
			<section className="request_additional_option_header_wrapper">
				<div className="auth_type_select_wrapper">
					<span className="request_additional_option_name">Authorization</span>
					<div className="request_additional_option_auth_type">
						<Tippy
							className="default_tippy auth_type_tippy_wrapper"
							placement="bottom"
							content={<RequestAuthTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[7, 5]}
						>
							<div className="auth_type_select">
								<span className="auth_type">{authType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					</div>
					{authType === "api-key" && (
						<Tippy
							className="default_tippy auth_type_tippy_wrapper"
							placement="bottom"
							content={<RequestAuthApiTypesList />}
							interactive={true}
							hideOnClick={true}
							animation="shift-away"
							trigger="click"
							arrow={false}
							zIndex={10}
							offset={[15, 5]}
						>
							<div className="auth_api_type_select">
								<span className="auth_api_type">{authApiKeyType}</span>
								<IconChevronDown size={15} />
							</div>
						</Tippy>
					)}
				</div>
				{authType != "none" && (
					<div className="request_additional_option_controls">
						<div
							className="enabled"
							onClick={() => setAuthEnabled(!authEnabled)}
						>
							<Switch
								checked={authEnabled}
								spanText={"Enabled"}
							/>
						</div>

						<div className="delete_all">
							<Tippy
								className="info_tippy"
								placement="top"
								content={"Clear current"}
								animation="shift-away"
								arrow={true}
								trigger="mouseenter"
								zIndex={0}
								offset={[-30, 10]}
							>
								<IconTrash
									size={16}
									stroke={2}
									onClick={() => {
										dispatch(auth_values_clear_func[authType]());
									}}
								/>
							</Tippy>
						</div>
					</div>
				)}
			</section>
			<section className={request_auth_classnames}>{auth_variants[authType]}</section>
		</>
	);
}

export default RequestAuth;
