import { NextFunction, Request, Response } from 'express';
import { CollaboratorType } from '../../@types/collaborator';
import { ResponseError } from '../../@types/responseError';

export interface ICollaboratorController {
  findAll: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<Response<CollaboratorType | ResponseError> | void>;
}
