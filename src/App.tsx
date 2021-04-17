import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LoginComponent from './components/Login';
import SignUpComponent from './components/SignUp';
import { StoresState } from './stores';
import { autoLogin } from './stores/service/userClient';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(autoLogin());
	}, []);

	const loggedIn = useSelector((state: StoresState) => state.user.loggedIn);
	const user = useSelector((state: StoresState) => state.user.user);

	return (
		<div className="App">
			{!loggedIn ? <h1>sign up or login</h1> : <h1> welcome, {user} </h1>}
			<SignUpComponent />
			<LoginComponent />
			<button>Logout</button>
		</div>
	);
}

export default App;
