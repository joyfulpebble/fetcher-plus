import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import requestConfigSlice from "./reducers/requestConfigSlice";

const persistConfig = {
	key: "root",
	storage: storage
};

const rootReducer = combineReducers({
	requestConfigReducer: requestConfigSlice.reducer
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
