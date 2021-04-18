import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { autoLogin, fetchUser, signUserUp } from './action';
import { initUserState } from './init';

const userSlice = createSlice({
	name: 'user',
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
		logout: (state) => {
			localStorage.removeItem('token');
			state.loggedIn = false;
			state.user = {};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signUserUp.fulfilled, (state, action) => {
			localStorage.setItem('token', action.payload.accessToken);
		});
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			localStorage.setItem('token', action.payload.accessToken);
		});
		builder.addCase(autoLogin.fulfilled, (state, action) => {
			localStorage.setItem('token', action.payload.accessToken);
			state.loggedIn = true;
		});
	},
});
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
