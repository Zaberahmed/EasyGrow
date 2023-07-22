import React from 'react';
import { ChangeEvent, useState } from 'react';
import { createAccount } from '../../../Services/user';
import EasyGrowLogo from '../../../assets/EasyGrow.component';

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

	const handleChange = async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = event.target;
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent) => {
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
		<div className="sign-up-container">
			<form
				onSubmit={handleSubmit}
				className="sign-up-form">
				<figure className="logo">
					<EasyGrowLogo />
				</figure>

				<label
					data-testid="name-label"
					htmlFor="name">
					Name:
				</label>
				<input
					data-testid="name-input"
					placeholder="John Doe"
					type="text"
					value={state.name}
					onChange={handleChange}
					name="name"
					id="name"
					required
				/>

				<label
					data-testid="email-label"
					htmlFor="email">
					Email:
				</label>
				<input
					data-testid="email-input"
					placeholder="email@email.com"
					type="email"
					id="email"
					name="email"
					value={state.email}
					onChange={handleChange}
					required
				/>

				<label
					data-testid="password-label"
					htmlFor="password">
					Password:
				</label>
				<input
					data-testid="password-input"
					placeholder="XXXXXXXX"
					type="password"
					id="password"
					name="password"
					value={state.password}
					onChange={handleChange}
					required
				/>

				<label
					data-testid="phoneNumber-label"
					htmlFor="phoneNumber">
					Phone Number:
				</label>
				<input
					data-testid="phoneNumber-input"
					placeholder="01XXX-XXXXXX"
					type="tel"
					id="phoneNumber"
					name="phoneNumber"
					value={state.phoneNumber}
					onChange={handleChange}
					required
				/>

				<label
					data-testid="address-label"
					htmlFor="address">
					Address:
				</label>
				<textarea
					data-testid="address-input"
					id="address"
					name="address"
					value={state.address}
					onChange={handleChange}
					required
				/>

				<label
					data-testid="role-label"
					htmlFor="role">
					Role:
				</label>
				<select
					data-testid="role-input"
					id="role"
					name="role"
					value={state.role}
					onChange={handleChange}
					required>
					<option value="">Select a role</option>
					<option value="farmer">Farmer</option>
					<option value="landOwner">Land Owner</option>
				</select>

				<div className="sign-up-button">
					<button
						type="submit"
						data-testid="sign-up-button">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
