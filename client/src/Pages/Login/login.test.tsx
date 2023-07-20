// import React from 'react';
import { fireEvent, render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Login, { validateInput, passwordValidate } from './Login.component';
import { userLogin } from '../../Services/user';
jest.mock('./../../Services/user', () => ({
  userLogin: jest.fn(() => Promise.resolve('mocked-token')),
}));

describe("login", () => {
  test("validate function should pass on correct input ", () => {
    const text = "text@test.com";
    expect(validateInput(text)).toBe(true);
  });
  test("validate function should fail on incorrect input ", () => {
    const text = "text";
    expect(validateInput(text)).not.toBe(true);
  });
  test("login form should be in the document", () => {
    const component = render(<Login />);
    const labelNode = component.getByText("Email:")
    expect(labelNode).toBeInTheDocument();
  });
  test("email field should have label", () => {
    const component = render(<Login />);
    const emailInputNode = component.getByLabelText("Email:");
    expect(emailInputNode.getAttribute("name")).toBe("email");
  });

  test("email input should accept text", () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInputNode = getByLabelText("Email:") as HTMLInputElement;

    expect(emailInputNode.value).toMatch("");

    fireEvent.change(emailInputNode, { target: { value: 'testing' } });

    expect(emailInputNode.value).toMatch('testing');

    const errorMessageNode = getByText("Email not valid");
    expect(errorMessageNode).toBeInTheDocument();

    fireEvent.change(emailInputNode, { target: { value: 'testing@' } });

    expect(errorMessageNode).not.toBeInTheDocument();
  });

  test('should be able to submit form', async () => {
    const { getByRole, getByLabelText } = render(<Login />);

    // Set the email and password values
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Submit the form
    const loginButton = getByRole('button', { name: /log in/i });
    fireEvent.click(loginButton);


    const formData = { email: 'test@example.com', password: 'password123' };
    expect(userLogin).toHaveBeenCalledWith(formData);

  });
  test('test passing password requirements', () => {
    expect(passwordValidate('Abc123')).toBe(true);
    expect(passwordValidate('s!_1Y3')).toBe(true);
    expect(passwordValidate('0!Ab23')).toBe(true);
  })
  test('test failing password requirements', () => {
    expect(passwordValidate('    Ab c  123 ')).toBe(false);
    expect(passwordValidate('st!_123')).toBe(false);
    expect(passwordValidate('0!_A23')).toBe(false);
  })

});

// test('testing inside login folder', () => {
//   expect(1 + 2).toBe(3);
// });

