import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import { IMiddleware } from './interfaces/IMiddleware';

export default class TaskMiddleware implements IMiddleware {
  public validateTaskFields = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ResponseError> | void> => {
    const { name, description, projectId } = req.body;
    if (!name) {
      return res.status(400).json({
        message: 'The "name" field is required',
      });
    }
    if (!description) {
      return res.status(400).json({
        message: 'The "description" field is required',
      });
    }
    if (!projectId) {
      return res.status(400).json({
        message: 'The "projectId" field is required',
      });
    }

    return next();
  };

  public create = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    this.validateTaskFields(req, res, next);
  };

  public update = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'The "id" parameter is required!',
      });
    }

    return this.validateTaskFields(req, res, next);
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
