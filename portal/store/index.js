import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import eventReducer from "./reducers/events";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
  },
});