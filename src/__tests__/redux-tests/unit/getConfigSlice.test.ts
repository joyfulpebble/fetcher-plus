import getConfigSlice from "../../../redux/reducers/getConfigSlice";

import { GetConfigI } from "../../../types/request_configs";

const initState: GetConfigI = {
  params: {},
  url: ''
} 

describe('getConfigSlice', () => {
  it('should return default state when passed an ampty action', () => {
    const result = getConfigSlice(undefined, { type: '' });

    expect(result).toEqual(initState)
  })
});