import getConfigReducer, { getConfigSlice } from "../../../redux/reducers/getConfigSlice";

import { AnyAction } from "@reduxjs/toolkit";
import type { APIT } from "../../../types/api";

const { clearConfig, updateConfig } = getConfigSlice.actions,
	initialState: APIT.GetConfigI = {
		params: {},
		url: "",
		request_name: ""
	};

describe("getConfigSlice", () => {
	it("should return default state when passed an ampty action", () => {
		const result = getConfigReducer(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});

	it('should clear config state with "clearConfig" action', () => {
		const action: AnyAction = { type: clearConfig.type },
			result = getConfigReducer(initialState, action);

		expect(result).toEqual(initialState);
	});

	it('should update config state with "updateConfig" action', () => {
		const payload: APIT.GetConfigI = {
				url: "https://some-url-here",
				params: {
					some_parameter: "here"
				},
				request_name: ""
			},
			action: AnyAction = { type: updateConfig.type, payload: payload },
			result = getConfigReducer(initialState, action);

		expect(result.url).toEqual("https://some-url-here");
		expect(result.params).toEqual({
			some_parameter: "here"
		});
	});
});
