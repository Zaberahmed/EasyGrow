import { Request, Response, NextFunction } from 'express';

const authorizer = async (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.body;

  if (role === 'farmer' || role === 'landOwner') {
    next();
  }

  return res.status(404).send('You are not authorized !!!');
};

export { authorizer };
