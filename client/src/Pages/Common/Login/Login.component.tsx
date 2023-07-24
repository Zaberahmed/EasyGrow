import './Login.style.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { userLogin } from '../../../Services/user';
import { useNavigate } from 'react-router-dom';


const initialState = {
	email: '',
	password: '',
};


export const validateInput = (str = '') => str.includes('@');

const Login = () => {
	const navigate = useNavigate()
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

		const formData: FormData = new FormData(form);
		const user = Object.fromEntries(formData);

		const token = await userLogin(user);


		if (token) {
			navigate('/home')
		}
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
				{/* {formData.password && !passwordValidate(formData.password) ? <p className="">Password not stronger</p> : null} */}
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
