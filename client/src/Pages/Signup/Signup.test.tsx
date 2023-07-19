import { render, screen } from '@testing-library/react';

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
});
