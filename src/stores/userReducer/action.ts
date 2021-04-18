import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ISignUp } from '../../components/SignUp';

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (userInfo) => {
		const URL = 'http://localhost:4000/login';
		const res = await axios.post(URL, userInfo);
		return res.data;
	}
);

export const autoLogin = createAsyncThunk('user/autoLogin', async () => {
	const URL = 'http://localhost:4000/login';
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	};
	const res = await axios.get(URL, config);
	return res.data;
});

export const signUserUp = createAsyncThunk(
	'user/signUserUp',
	async (userInfo: ISignUp) => {
		const URL = 'http://localhost:4000/login';
		const res = await axios.post(URL, userInfo);
		return res.data;
	}
);
