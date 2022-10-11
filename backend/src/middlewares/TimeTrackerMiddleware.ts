import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import { IMiddleware } from './interfaces/IMiddleware';

export default class TimeTrackerMiddleware implements IMiddleware {
  public validateTimeTrackerFields = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ResponseError> | void> => {
    const { timeZoneId, taskId, collaboratorId } = req.body;
    if (!timeZoneId) {
      return res.status(400).json({
        message: 'The "timeZoneId" field is required',
      });
    }
    if (!taskId) {
      return res.status(400).json({
        message: 'The "taskId" field is required',
      });
    }
    if (!collaboratorId) {
      return res.status(400).json({
        message: 'The "collaboratorId" field is required',
      });
    }

    return next();
  };

  public create = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    return this.validateTimeTrackerFields(req, res, next);
  };
}
