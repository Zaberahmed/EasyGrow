import './Login.style.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { userLogin } from '../../../Services/user';
import { useNavigate } from 'react-router-dom';

const initialState = {
	email: '',
	password: '',
};

export const validateInput = (str = '') => str.includes('@');

const Login = () => {
	const navigate = useNavigate();
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
		const [token, setToken] = useState<string>('');

		const form = e.currentTarget;

		const formData: FormData = new FormData(form);
		const user = Object.fromEntries(formData);

		const result = await userLogin(user);
		setToken(result);
	};
	const validateForm = () => {
		return !formData.email || !formData.password;
	};

	// 	useEffect(() => {
	// 		const fetchProfile=()=>{
	// try{

	// }
	// catch(error){
	// 	console.log(error)
	// }
	// 		}
	// 		fetchProfile()
	// 	}, [token]);

	return (
		<div>
			<h2>Login</h2>
			<form
				className="login-form"
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
