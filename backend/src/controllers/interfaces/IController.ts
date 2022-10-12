import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../../@types/responseError';

export interface IController<T> {
  findAll: (req: Request, res: Response, next: NextFunction) => Promise<Response<T[]> | void>;
  create: (req: Request, res: Response, next: NextFunction) => Promise<Response<T | ResponseError> | void>;
  update: (req: Request, res: Response, next: NextFunction) => Promise<Response<T | ResponseError> | void>;
  delete: (req: Request, res: Response, next: NextFunction) => Promise<Response<T | ResponseError> | void>;
  findOne: (req: Request, res: Response, next: NextFunction) => Promise<Response<T | ResponseError> | void>;
}
