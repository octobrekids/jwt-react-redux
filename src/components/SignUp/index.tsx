import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUserUp } from '../../stores/service/userClient';

interface ISignUp {
	username: string;
	password: string;
	age: number;
}

const SignUpComponent = () => {
	const dispatch = useDispatch();
	const [signUpForm, setSignUpForm] = useState<ISignUp>({
		username: '',
		password: '',
		age: 0,
	});

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSignUpForm((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(signUserUp());
	};
	return (
		<div>
			<h2>Sign Up Form</h2>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={signUpForm.username}
					onChange={handleOnChange}
				/>
				<br />
				<input
					type="password"
					name="password"
					placeholder="password"
					value={signUpForm.password}
					onChange={handleOnChange}
				/>
				<br />
				<input
					type="number"
					name="age"
					placeholder="Age"
					value={signUpForm.age}
					onChange={handleOnChange}
				/>
				<br />
				<input type="submit" value="login" />
			</form>
		</div>
	);
};

export default SignUpComponent;
