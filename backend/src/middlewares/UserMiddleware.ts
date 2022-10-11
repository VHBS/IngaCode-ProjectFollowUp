import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import jwt from '../utils/jwt/jwt';
import { IUserMiddleware } from './interfaces/IUserMiddleware';

export default class UserMiddleware implements IUserMiddleware {
  public validateJwt = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ResponseError> | void> => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: 'Token not provided!',
      });
    }

    try {
      jwt.verify(authorization);
      return next();
    } catch (error) {
      return res.status(401).json({
        message: 'Unauthorized user!',
      });
    }
  };

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
