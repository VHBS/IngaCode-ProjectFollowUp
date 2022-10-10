import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../../@types/responseError';
import { UserLoginType } from '../../@types/user';

export interface IUserController {
  login: (req: Request, res: Response, next: NextFunction) => Promise<Response<UserLoginType | ResponseError> | void>;
}
