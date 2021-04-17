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
	return <div></div>;
};

export default SignUpComponent;
