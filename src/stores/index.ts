import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentReducer";
import userSlice from "./userReducer";

export const store = configureStore({
  reducer: {
    user: userSlice,
    comment: commentSlice,
  },
});
