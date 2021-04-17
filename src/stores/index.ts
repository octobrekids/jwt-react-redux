import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentReducer";
import userSlice from "./userReducer";

const rootReducer = combineReducers({
    user: userSlice,
    comment: commentSlice,
})

export const store = configureStore({
  reducer: rootReducer
});

export type StoresState = ReturnType<typeof rootReducer>;



