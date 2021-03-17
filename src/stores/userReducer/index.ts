import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initUserState } from "./init";

const userSlice = createSlice({
  name: "user",
  initialState: initUserState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ loggedIn: boolean; user: {} }>
    ) => {
      const { payload } = action;
      state.loggedIn = true;
      state.user = payload.user;
    },
    logout: (state, action) => {
      localStorage.clear();
      state.loggedIn = false;
      state.user = {};
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice;
