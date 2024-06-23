// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import produceReducer from "./produceSlice";

export const store = configureStore({
  reducer: {
    produce: produceReducer,
  },
});
