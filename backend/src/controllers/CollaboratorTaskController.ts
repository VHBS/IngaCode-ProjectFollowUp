import { NextFunction, Request, Response } from 'express';
import { CollaboratorTaskType } from '../@types/collaboratorTask';
import { CollaboratorTaskServiceType } from '../@types/collaboratorTaskService';
import { ResponseError } from '../@types/responseError';
import { ICollaboratorTaskService } from '../services/interfaces/ICollaboratorTaskService';
import { ICollaboratorTaskController } from './interfaces/ICollaboratorTaskController';

export default class CollaboratorTaskController implements ICollaboratorTaskController {
  private _service: ICollaboratorTaskService<CollaboratorTaskServiceType>;

  constructor(service: ICollaboratorTaskService<CollaboratorTaskServiceType>) {
    this._service = service;
  }

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<CollaboratorTaskType | ResponseError> | void> => {
    try {
      const { collaboratorId, taskId } = req.body;
      const newCollaboratorTask = await this._service.create({ collaboratorId, taskId });
      return res.status(newCollaboratorTask.status).json(newCollaboratorTask.json);
    } catch (error) {
      return next(error);
    }
  };
}
