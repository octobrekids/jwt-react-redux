import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentReducer";
import userSlice from "./userReducer";

const reducer = {
    user: userSlice.reducer,
    comment: commentSlice.reducer
};

export const store = configureStore({
  reducer,
});
