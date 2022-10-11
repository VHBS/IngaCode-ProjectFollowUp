import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import { TaskType } from '../@types/task';
import { TaskServiceType } from '../@types/taskService';
import { ITaskService } from '../services/interfaces/ITaskService';
// import { IController } from './interfaces/IController';

// export default class TaskController implements IController<TaskType> {
export default class TaskController {
  private _service: ITaskService<TaskServiceType>;

  constructor(service: ITaskService<TaskServiceType>) {
    this._service = service;
  }

  public findAll = async (_req: Request, res: Response, next: NextFunction): Promise<Response<TaskType[]> | void> => {
    try {
      const resultTaskService = await this._service.findAll();
      return res.status(resultTaskService.status).json(resultTaskService.json);
    } catch (error) {
      return next(error);
    }
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TaskType> | ResponseError | void> => {
    try {
      const { name, description, projectId } = req.body;
      const resultTaskService = await this._service.create({ name, description, projectId });
      return res.status(resultTaskService.status).json(resultTaskService.json);
    } catch (error) {
      return next(error);
    }
  };

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TaskType> | ResponseError | void> => {
    try {
      const { id } = req.params;
      const { name, description, projectId } = req.body;

      const resultTaskService = await this._service.update(id, { name, description, projectId });
      return res.status(resultTaskService.status).json(resultTaskService.json);
    } catch (error) {
      return next(error);
    }
  };
}
