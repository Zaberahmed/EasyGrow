import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './Signup.component';
import '@testing-library/jest-dom';

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
		const { getByLabelText } = render(<SignUp />);
		const inputName = getByLabelText('Name:') as HTMLInputElement;
		expect(inputName.value).toMatch('');
		fireEvent.change(inputName, { target: { value: 'Zaber Ahmed' } });
		expect(inputName.value).toMatch('Zaber Ahmed');
	});
});
