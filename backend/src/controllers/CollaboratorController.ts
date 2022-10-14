import { NextFunction, Request, Response } from 'express';
import { CollaboratorType } from '../@types/collaborator';
import { CollaboratorServiceType } from '../@types/collaboratorService';
import { ResponseError } from '../@types/responseError';
import { ICollaboratorService } from '../services/interfaces/ICollaboratorService';
import { ICollaboratorController } from './interfaces/ICollaboratorController';

export default class CollaboratorController implements ICollaboratorController {
  private _service: ICollaboratorService<CollaboratorServiceType>;

  constructor(service: ICollaboratorService<CollaboratorServiceType>) {
    this._service = service;
  }

  public findAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<CollaboratorType | ResponseError> | void> => {
    try {
      const newCollaboratorTask = await this._service.findAll();
      return res.status(newCollaboratorTask.status).json(newCollaboratorTask.json);
    } catch (error) {
      return next(error);
    }
  };
}
