import './Login.style.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { userLogin } from '../../../Services/user';

const initialState = {
	email: '',
	password: '',
};
const isUpperCase = new RegExp(/(?=.*[A-Z])/g);
const isLowerCase = new RegExp(/(?=.*[a-z])/g);
const isLong = new RegExp(/(?=.{6,})/g);
const isNumeric = new RegExp(/(?=.*[0-9])/g);
const checkIsWhiteSpaceFromBegAndEnd = new RegExp(/^([^ ][\w\W ]*[^ ])$/);

export const validateInput = (str = '') => str.includes('@');
export const passwordValidate = (currentPassword: string): boolean => {
	if (currentPassword.match(isUpperCase) && currentPassword.match(isLowerCase) && currentPassword.match(isLong) && currentPassword.match(isNumeric) && currentPassword.match(checkIsWhiteSpaceFromBegAndEnd)) {
		return true;
	} else {
		return false;
	}
};
const Login = () => {
	const [formData, setFomData] = useState(initialState);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFomData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		console.log(form);
		const formData: FormData = new FormData(form);
		const user = Object.fromEntries(formData);
		console.log(user);
		const token = await userLogin(user);
		console.log(token);

		// if (token!) {
		//   const hello = await profile();
		//   console.log(hello);
		// }
	};
	const validateForm = () => {
		return !formData.email || !formData.password;
	};

	return (
		<div>
			<h2>Login</h2>
			<form
				name="login-form"
				onSubmit={handleSubmit}>
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="text"
					name="email"
					placeholder="xyz@gmail.com"
					value={formData.email}
					onChange={handleChange}
				/>
				<br />
				<br />
				{formData.email && !validateInput(formData.email) ? <p className="">Email not valid</p> : null}
				<label htmlFor="password">Password:</label>
				<input
					id="password"
					type="password"
					name="password"
					placeholder="password"
					value={formData.password}
					onChange={handleChange}
				/>
				{formData.password && !passwordValidate(formData.password) ? <p className="">Password not stronger</p> : null}
				<button
					role="button"
					type="submit"
					disabled={validateForm()}>
					Log in
				</button>
			</form>
		</div>
	);
};

export default Login;
