import { NextFunction, Request, Response } from 'express';
import { ProjectType } from '../@types/project';
import { IService } from '../services/interfaces/IService';
import { IController } from './interfaces/IController';

export default class ProjectController implements IController<ProjectType> {
  private _service: IService<ProjectType>;

  constructor(service: IService<ProjectType>) {
    this._service = service;
  }

  public findAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ProjectType[]> | void> => {
    try {
      const allProjects = await this._service.findAll();
      return res.status(200).json(allProjects);
    } catch (error) {
      return next(error);
    }
  };
}
