import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import requestUrlSlice from "./reducers/requestUrlSlice";
import customRequestMethodsListSlice from "./reducers/customRequestMethodsListSlice";
import requestQueryParamsSlice from "./reducers/requestQueryParamsSlice";
import requestSelectedMethodSlice from "./reducers/requestSelectedMethodSlice";
import requestHeadersSlice from "./reducers/requestHeadersSlice";
import requestBodyTypeSlice from "./reducers/requestBodyTypeSlice";
import requestBodyFormDataSlice from "./reducers/requestBodyFormDataSlice";
import requestBodyUrlEncodedSlice from "./reducers/requestBodyUrlEncodedSlice";

const persistConfig = {
	key: "root",
	storage: storage
};

const rootReducer = combineReducers({
	requestBodyUrlEncodedReducer: requestBodyUrlEncodedSlice.reducer,
	requestBodyFormDataReducer: requestBodyFormDataSlice.reducer,
	requestBodyTypeReducer: requestBodyTypeSlice.reducer,
	requestUrlReducer: requestUrlSlice.reducer,
	requestHeadersSlice: requestHeadersSlice.reducer,
	requestQueryParameters: requestQueryParamsSlice.reducer,
	requestSelctedMethod: requestSelectedMethodSlice.reducer,
	customRequestMethodsListReducer: customRequestMethodsListSlice.reducer
});
const persistReduser = persistReducer(persistConfig, rootReducer);

export const setupStore = () =>
	configureStore({
		reducer: persistReduser,
		devTools: true,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			})
	});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
