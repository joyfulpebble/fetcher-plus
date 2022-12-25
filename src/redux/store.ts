import { combineReducers, configureStore } from "@reduxjs/toolkit";

import getConfigReducer  from "./reducers/GetConfigSlice";

const rootReducer = combineReducers({
  'getConfig': getConfigReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true
  })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];