import jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + './../.env' });

const SECRET_KEY: string = process.env.SECRET_KEY || 'HELLO WORLD';
const blockedList: string[] = [];

interface SessionData {
  expiresAt: number;
  userEmail: string;
}

const createSession = (userEmail: string): string => {
  const expiry = new Date();
  expiry.setFullYear(expiry.getFullYear() + 10);

  const newSession: SessionData = {
    expiresAt: expiry.valueOf(),
    userEmail: userEmail,
  };

  return jwt.sign(newSession, SECRET_KEY);
};

const getSession = (token: string): SessionData | undefined => {
  if (blockedList.includes(token)) return undefined;

  try {
    const sessionData = jwt.verify(token, SECRET_KEY) as unknown as SessionData;

    if (sessionData.expiresAt < Date.now()) {
      console.log('Token has expired.');
      return undefined;
    }

    return sessionData;
  } catch (error) {
    console.error('Error verifying token:', error);
    return undefined;
  }
};

const destroySession = (token: string): boolean => {
  blockedList.push(token);
  return true;
};

export { createSession, getSession, destroySession, SessionData };
