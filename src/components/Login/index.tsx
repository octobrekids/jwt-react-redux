import React, { FormEventHandler, useState } from 'react';
import { fetchUser } from '../../stores/service/userClient';

interface IUser {
	username: string;
	password: string;
}

const LoginComponent: React.FC = () => {
	const [user, setUser] = useState<IUser>({
		username: '',
		password: '',
	});

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setUser((oldValue) => {
			return {
				...oldValue,
				[e.target.name]: e.target.value,
			};
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetchUser();
	};

	return (
		<div>
			<h1> Login Form</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="username"
					placeholder="username"
					value={user.username}
					onChange={handleOnChange}
				/>
				<br />
				<input
					type="password"
					name="password"
					placeholder="password"
					value={user.password}
					onChange={handleOnChange}
				/>
				<br />
				<input type="submit" value="login" />
			</form>
		</div>
	);
};

export default LoginComponent;
