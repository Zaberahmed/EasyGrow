import { Request, Response, NextFunction } from 'express';
import { getSession } from './sessionManagement';

const authenticator = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(400).send('Token not found!');
  }

  const existingSession = getSession(token);
  if (!existingSession) {
    return res.status(400).send('Session does not exist!');
  }

  next();
};

export { authenticator };
