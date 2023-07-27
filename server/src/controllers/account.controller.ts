import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {
  createUser,
  findByUserId,
  findUserByEmail,
  updatePassword,
} from './../models/user.model';
import {
  getSession,
  createSession,
  destroySession,
  SessionData,
} from './../middlewares/sessionManagement';
import { sendOTP } from './mailer.controller';

interface OTP {
	email: string;
	otp: string;
}
let storedOTP: OTP | null = null;

const registerUser = async (req: Request, res: Response) => {
	try {
		const { name, email, password, phoneNumber, address, role } = req.body;

		if (await findUserByEmail(email)) {
			return res.status(401).send('Email already exists!');
		}

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const newUser = await createUser({
			name,
			email,
			password: hashedPassword,
			phoneNumber,
			address,
			role,
		});

		res.status(200).send(newUser);
	} catch (error) {
		res.status(500).send('Failed to register user');
	}
};

const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const user = await findUserByEmail(email);

		if (!user) {
			return res.status(400).send('There is no user with that email!');
		}

		const isCredentialsOk = await bcrypt.compare(password, user.password);

		if (!isCredentialsOk) {
			return res.status(401).send('Invalid password!');
		}

		const token = createSession(email);
		res.cookie('accessToken', token, {
			httpOnly: false,
			secure: false,
			sameSite: 'strict',
		});

		res.status(200).send({ accessToken: token });
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const forgotPassword = async (req: Request, res: Response) => {
	try {
		const { email } = req.body;

		const user = await findUserByEmail(email);

		if (!user) {
			return res.status(400).send('There is no user with that email!');
		}

		const otp = Math.floor(Math.random() * 10000).toString();
		storedOTP = { email, otp };

		const { name } = user;

		await sendOTP(name, email, otp);

		res.status(200).send('OTP has been sent to your email!');
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const resetPassword = async (req: Request, res: Response) => {
	try {
		const { email, newPassword, otp } = req.body;

		if (!storedOTP || storedOTP.email !== email || storedOTP.otp !== otp) {
			return res.status(400).send('Invalid OTP or email!');
		}

		const user = await findUserByEmail(email);

		if (!user) {
			return res.status(400).send('There is no user with that email!');
		}

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

		await updatePassword(email, hashedPassword);
		storedOTP = null;

		res.status(200).send('Password has been reset successfully!');
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const profile = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.accessToken;
		const session: SessionData | undefined = getSession(token);

		if (session) {
			const profile = await findUserByEmail(session.userEmail);
			res.status(200).send(profile);
		}
	} catch (error) {
		console.log(error);
	}
};

const userById = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const user = await findByUserId(id);

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req: Request, res: Response) => {
	try {
		const token = req.cookies.accessToken;
		if (!destroySession(token)) {
			res.status(400).send('No session to logout.');
		}

		res.status(200).send('successfully logged out!');
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

export { userById, registerUser, login, forgotPassword, resetPassword, profile, logout };
function findById(id: any) {
	throw new Error('Function not implemented.');
}
