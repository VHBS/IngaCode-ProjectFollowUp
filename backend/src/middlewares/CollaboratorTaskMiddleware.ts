import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';

export default class CollaboratorTaskMiddleware {
  public create = async (req: Request, res: Response, next: NextFunction): Promise<Response<ResponseError> | void> => {
    const { collaboratorId, taskId } = req.body;
    if (!collaboratorId) {
      return res.status(400).json({
        message: 'The "collaboratorId" field is required',
      });
    }

    if (!taskId) {
      return res.status(400).json({
        message: 'The "taskId" field is required',
      });
    }

    return next();
  };
}
