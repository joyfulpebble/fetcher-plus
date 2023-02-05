import requestErrorReduser, { requestErrorSlice } from "../../../redux/reducers/requestErrorSlice";

import { RequestErrorsStateI } from "../../../types/simple_models";
import { AnyAction } from "@reduxjs/toolkit";

const { addError, clearErrorStorage } = requestErrorSlice.actions;
const initialState: RequestErrorsStateI = {
  errors: []
};

describe('requestErrorSlice', () => {
  it('should return default state when passed an ampty action', () => {
    const result = requestErrorReduser(undefined, { type: '' });;

    expect(result).toEqual(initialState);
  })

  it('should add new error in state with "addError" action', () => {
    const payload = 'Error: A very terrible error!';
    const action: AnyAction = { type: addError.type, payload: payload};

    const result = requestErrorReduser(initialState, action);

    expect(result.errors[0]).toEqual('Error: A very terrible error!');
  })

  it('should clear error storage with "clearErrorStorage" action', () => {
    const action: AnyAction = { type: clearErrorStorage.type};

    const result = requestErrorReduser(initialState, action);

    expect(result).toEqual(initialState);
  })
})