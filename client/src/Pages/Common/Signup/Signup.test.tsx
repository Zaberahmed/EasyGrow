import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './Signup.component';
import '@testing-library/jest-dom';

describe('Sign Up component test', () => {
	beforeEach(() => {
		render(<SignUp />);
	});
	describe('All the necessary elements are present', () => {
		test('all the labels are present', () => {
			expect(screen.getByTestId('name-label')).toBeInTheDocument();
			expect(screen.getByTestId('email-label')).toBeInTheDocument();
			expect(screen.getByTestId('password-label')).toBeInTheDocument();
			expect(screen.getByTestId('phoneNumber-label')).toBeInTheDocument();
			expect(screen.getByTestId('address-label')).toBeInTheDocument();
			expect(screen.getByTestId('role-label')).toBeInTheDocument();
		});

		test('all the input fields are present', () => {
			expect(screen.getByTestId('name-input')).toBeInTheDocument();
			expect(screen.getByTestId('email-input')).toBeInTheDocument();
			expect(screen.getByTestId('password-input')).toBeInTheDocument();
			expect(screen.getByTestId('phoneNumber-input')).toBeInTheDocument();
			expect(screen.getByTestId('address-input')).toBeInTheDocument();
			expect(screen.getByTestId('role-input')).toBeInTheDocument();
		});

		test('all the buttons are present', () => {
			expect(screen.getByTestId('sign-up-button')).toBeInTheDocument();
		});
	});

	describe('All the elements are behaving correctly', () => {
		test('valid inputs are being accepted', () => {
			fireEvent.change(screen.getByTestId('name-input') as HTMLInputElement, { target: { value: 'Zaber Ahmed' } });
			fireEvent.change(screen.getByTestId('email-input') as HTMLInputElement, { target: { value: 'zaber@example.com' } });
			fireEvent.change(screen.getByTestId('password-input') as HTMLInputElement, { target: { value: 'password123' } });
			fireEvent.change(screen.getByTestId('phoneNumber-input') as HTMLInputElement, { target: { value: '1234567890' } });
			fireEvent.change(screen.getByTestId('address-input') as HTMLTextAreaElement, { target: { value: '123 Street, City' } });
			fireEvent.change(screen.getByTestId('role-input') as HTMLSelectElement, { target: { value: 'farmer' } });

			expect((screen.getByTestId('name-input') as HTMLInputElement).value).toMatch('Zaber Ahmed');
			expect((screen.getByTestId('email-input') as HTMLInputElement).value).toMatch('zaber@example.com');
			expect((screen.getByTestId('password-input') as HTMLInputElement).value).toMatch('password123');
			expect((screen.getByTestId('phoneNumber-input') as HTMLInputElement).value).toMatch('1234567890');
			expect((screen.getByTestId('address-input') as HTMLTextAreaElement).value).toMatch('123 Street, City');
			expect((screen.getByTestId('role-input') as HTMLSelectElement).value).toMatch('farmer');
		});
	});
});
