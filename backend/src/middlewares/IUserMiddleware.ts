import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import { IUserMiddleware } from './interfaces/IUserMiddleware';

export default class UserMiddleware implements IUserMiddleware {
  public login = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({
        message: 'You must fill the fields correctly!',
      });
    }
    return next();
  };
}
