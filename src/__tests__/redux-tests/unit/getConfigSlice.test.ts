import getConfigReducer, { getConfigSlice } from "../../../redux/reducers/getConfigSlice";

import { AnyAction } from "@reduxjs/toolkit";
import { GetConfigI } from "../../../types/request_configs";

const { clearConfig, updateConfig } = getConfigSlice.actions
const initState: GetConfigI = {
  params: {},
  url: ''
} 

describe('getConfigSlice', () => {
  it('should return default state when passed an ampty action', () => {
    const result = getConfigReducer(undefined, { type: '' });;

    expect(result).toEqual(initState);
  })

  it('should clear config state with "clearConfig" action', () => {
    const action: AnyAction = { type: clearConfig.type };
    const result = getConfigReducer(initState, action);

    expect(result.params).toEqual({});
    expect(result.url).toEqual('');
  })

  it('should update config state with "updateConfig" action', () => {
    const payload: GetConfigI = {
      url: 'https://some-url-here',
      params: {
        some_parameter: 'here'
      }
    };
    const action: AnyAction= { type: updateConfig.type, payload: payload };

    const result = getConfigReducer(initState, action);

    expect(result.url).toEqual('https://some-url-here');
    expect(result.params).toEqual({
      some_parameter: 'here'
    });
  })
});