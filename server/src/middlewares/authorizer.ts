import { Request, Response, NextFunction } from 'express';
import { getSession, SessionData } from './../middlewares/sessionManagement';
import { findUserByEmail } from './../models/user.model';

const authorizer = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;
  const session: SessionData | undefined = getSession(token);

  if (session) {
    const user = await findUserByEmail(session.userEmail);

    if (user?.role === 'farmer' || user?.role === 'landOwner') {
      next();
    }
  } else res.status(404).send('You are not authorized !!!');
};

export { authorizer };
