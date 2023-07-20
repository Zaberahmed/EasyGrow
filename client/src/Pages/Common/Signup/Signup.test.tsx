import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './Signup.component';

describe('Sign Up component test', () => {
	test('all the necessary elements are present', () => {
		render(<SignUp />);

		expect(screen.getByLabelText('Name:')).toBeInTheDocument();
		expect(screen.getByLabelText('Email:')).toBeInTheDocument();
		expect(screen.getByLabelText('Password:')).toBeInTheDocument();
		expect(screen.getByLabelText('Phone Number:')).toBeInTheDocument();
		expect(screen.getByLabelText('Address:')).toBeInTheDocument();
		expect(screen.getByLabelText('Role:')).toBeInTheDocument();

		expect(screen.getByText('Sign Up')).toBeInTheDocument();
	});

	test('user inputs are being recorded', async () => {
		const user = userEvent.setup();
		render(<SignUp />);
		const inputName = screen.getByPlaceholderText('John Doe');

		await user.type(inputName, 'Zaber Ahmed');
		expect(inputName).toHaveValue('Zaber Ahmed');
	});
});
