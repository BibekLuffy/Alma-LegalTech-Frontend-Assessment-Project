import {
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
  FLUSH,
  PAUSE,
} from "redux-persist/es/constants";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appSlice from "@/redux/appSlice/appSlice";
import leadsSlice from "@/redux/leadsSlice/leadsSlice";
import adminSlice from "@/redux/adminSlice/adminSlice";
import { createStateSyncMiddleware } from "redux-state-sync";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["leads", "admin"],
};

const rootReducer = combineReducers({
  app: appSlice,
  admin: adminSlice,
  leads: leadsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const reduxStateSyncMiddleware = createStateSyncMiddleware({
  blacklist: [PERSIST, PURGE, REHYDRATE, REGISTER, FLUSH, PAUSE],
});

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          // Ignore these field paths in all actions
          ignoredActionPaths: [],
          // Ignore these paths in the state
          ignoredPaths: [],
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }).concat(reduxStateSyncMiddleware) as any,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
