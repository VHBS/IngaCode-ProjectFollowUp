import { NextFunction, Request, Response } from 'express';
import { ProjectType } from '../@types/project';
import { ProjectServiceType } from '../@types/projectService';
import { ResponseError } from '../@types/responseError';
import { IProjectService } from '../services/interfaces/IProjectService';
import { IController } from './interfaces/IController';

export default class ProjectController implements IController<ProjectType> {
  private _service: IProjectService<ProjectServiceType>;

  constructor(service: IProjectService<ProjectServiceType>) {
    this._service = service;
  }

  public findAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ProjectType[]> | void> => {
    try {
      const resultProjectService = await this._service.findAll();
      return res.status(resultProjectService.status).json(resultProjectService.json);
    } catch (error) {
      return next(error);
    }
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ProjectType | ResponseError> | void> => {
    try {
      const { name } = req.body;
      const resultProjectService = await this._service.create({ name });

      return res.status(resultProjectService.status).json(resultProjectService.json);
    } catch (error) {
      return next(error);
    }
  };

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ProjectType | ResponseError> | void> => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const resultProjectService = await this._service.update(id, { name });
      return res.status(resultProjectService.status).json(resultProjectService.json);
    } catch (error) {
      return next(error);
    }
  };

  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ProjectType | ResponseError> | void> => {
    try {
      const { id } = req.params;

      const resultProjectService = await this._service.delete(id);

      if (resultProjectService.status !== 200) {
        return res.status(resultProjectService.status).json(resultProjectService.json);
      }
      return res.status(resultProjectService.status).send();
    } catch (error) {
      return next(error);
    }
  };

  public findOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<ProjectType | ResponseError> | void> => {
    try {
      const { id } = req.params;

      const resultProjectService = await this._service.findOne(id);

      return res.status(resultProjectService.status).json(resultProjectService.json);
    } catch (error) {
      return next(error);
    }
  };
}
