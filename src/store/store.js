import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from "./slices/noteSlice";

const store = configureStore({
  reducer: {
    notes: noteSliceReducer,
  },
});

export default store;
