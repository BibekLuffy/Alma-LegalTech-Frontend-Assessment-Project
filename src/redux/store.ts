import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import appSlice from "@/redux/appSlice/appSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import leadsSlice from "@/redux/leadsSlice/leadsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["leads"],
};

const rootReducer = combineReducers({
  app: appSlice,
  leads: leadsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
