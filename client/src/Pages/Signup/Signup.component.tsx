import React from 'react';
import { ChangeEvent, useState } from 'react';
import { createAccount } from './../../Services/user';
import EasyGrowLogo from './../../assets/EasyGrow.component';

const initialstate = {
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	address: '',
	role: '',
};

const SignUp: React.FC = () => {
	const [state, setState] = useState(initialstate);

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = event.target;
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		createAccount(state)
			.then(() => {
				console.log('account created');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<EasyGrowLogo />
				</div>
				<div>
					<label
						className="label"
						htmlFor="name">
						Name:
					</label>
					<input
						className=""
						type="text"
						id="name"
						value={state.name}
						onChange={handleChange}
						required // Add required attribute here
					/>
				</div>
				<div>
					<label
						className="label"
						htmlFor="email">
						Email:
					</label>
					<input
						className=""
						type="email"
						id="email"
						value={state.email}
						onChange={handleChange}
						required // Add required attribute here
					/>
				</div>
				<div>
					<label
						className="label"
						htmlFor="password">
						Password:
					</label>
					<input
						className=""
						type="password"
						id="password"
						value={state.password}
						onChange={handleChange}
						required // Add required attribute here
					/>
				</div>
				<div>
					<label
						className="label"
						htmlFor="phoneNumber">
						Phone Number:
					</label>
					<input
						className=""
						type="text"
						id="phoneNumber"
						value={state.phoneNumber}
						onChange={handleChange}
						required // Add required attribute here
					/>
				</div>
				<div>
					<label
						className="label"
						htmlFor="address">
						Address:
					</label>
					<textarea
						className=""
						id="address"
						value={state.address}
						onChange={handleChange}
						required // Add required attribute here
					/>
				</div>
				<div>
					<label
						className="label"
						htmlFor="role">
						Role:
					</label>
					<select
						className=""
						id="role"
						value={state.role}
						onChange={handleChange}
						required // Add required attribute here
					>
						<option value="">Select a role</option>
						<option value="farmer">Farmer</option>
						<option value="landOwner">Land Owner</option>
					</select>
				</div>

				<div>
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
