import React, { useState } from 'react';

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

	return <div></div>;
};

export default LoginComponent;
