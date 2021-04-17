import React, { useState } from 'react';

interface IUser {
	username: string;
	password: string;
}

const LoginComponent: React.FC = () => {
	const user = useState<IUser>({
		username: '',
		password: '',
	});

	return <div></div>;
};

export default LoginComponent;
