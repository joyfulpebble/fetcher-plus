import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist';
import storage from "redux-persist/lib/storage";
 
import getConfigReducer from "./reducers/getConfigSlice";
import statusErrorReducer from "./reducers/statusErrorSlice";

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['requestError']
}

const rootReducer = combineReducers({
  'getConfig': getConfigReducer,
  'requestError': statusErrorReducer
});

const persistReduser = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistReduser,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];