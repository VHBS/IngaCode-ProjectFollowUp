import { NextFunction, Request, Response } from 'express';
import { CollaboratorTaskType } from '../../@types/collaboratorTask';
import { ResponseError } from '../../@types/responseError';

export interface ICollaboratorTaskController {
  create: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<Response<CollaboratorTaskType | ResponseError> | void>;
}
