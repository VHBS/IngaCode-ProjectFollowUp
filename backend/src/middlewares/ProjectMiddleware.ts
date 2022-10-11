import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import { IMiddleware } from './interfaces/IMiddleware';

export default class ProjectMiddleware implements IMiddleware {
  public create = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: 'The "name" field is required',
      });
    }

    return next();
  };

  public update = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    const { id } = req.params;
    const { name } = req.body;

    if (!id) {
      return res.status(400).json({
        message: 'The "id" parameter is required!',
      });
    }

    if (!name) {
      return res.status(400).json({
        message: 'The "name" field is required!',
      });
    }

    return next();
  };

  public delete = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'The "id" parameter is required!',
      });
    }
    return next();
  };
}
