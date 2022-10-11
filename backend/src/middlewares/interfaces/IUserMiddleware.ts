import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../../@types/responseError';

export interface IUserMiddleware {
  login: (req: Request, res: Response, next: NextFunction) => Promise<Response<ResponseError> | void>;
}
