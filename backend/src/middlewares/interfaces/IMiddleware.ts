import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../../@types/responseError';

export interface IMiddleware {
  create: (req: Request, res: Response, next: NextFunction) => Promise<Response<ResponseError> | void>;
  update: (req: Request, res: Response, next: NextFunction) => Promise<Response<ResponseError> | void>;
  delete: (req: Request, res: Response, next: NextFunction) => Promise<Response<ResponseError> | void>;
}
