import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../userReducer";

export const fetchUser = createAsyncThunk("user/fetchUser", async (userInfo) => {
  const dispatch = useDispatch();
  const URL = "http://localhost:4000/login";
  await axios
    .post(URL, userInfo)
    .then((res) => res.data)
    .then((data) => {
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
});

export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
  const dispatch = useDispatch();
  const URL = "http://localhost:4000/login";
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  await axios.get(URL, config).then(res => res.data).then((data) => {
    localStorage.setItem("token", data.token);
    dispatch(setUser(data.user));
  });
});

export const signUserUp = createAsyncThunk("user/signUserUp", async (userInfo) => {
    const dispatch = useDispatch();
    const URL = "http://localhost:4000/users";
    await axios.post(URL, userInfo).then(res => res.data).then(data => {
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
})

