import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import { TimeTrackerType } from '../@types/timeTracker';
import { TimeTrackerServiceType } from '../@types/timeTrackerService';
import { ITimeTrackerService } from '../services/interfaces/ITimeTrackerService';
import { IController } from './interfaces/IController';

export default class TimeTrackerController implements IController<TimeTrackerType> {
  private _service: ITimeTrackerService<TimeTrackerServiceType>;

  constructor(service: ITimeTrackerService<TimeTrackerServiceType>) {
    this._service = service;
  }

  public findAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TimeTrackerType[]> | void> => {
    try {
      const resultTimeTrackerService = await this._service.findAll();
      return res.status(resultTimeTrackerService.status).json(resultTimeTrackerService.json);
    } catch (error) {
      return next(error);
    }
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TimeTrackerType | ResponseError> | void> => {
    try {
      const { timeZoneId, taskId, collaboratorId } = req.body;
      const resultTimeTrackerService = await this._service.create({ timeZoneId, taskId, collaboratorId });

      return res.status(resultTimeTrackerService.status).json(resultTimeTrackerService.json);
    } catch (error) {
      return next(error);
    }
  };

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TimeTrackerType | ResponseError> | void> => {
    try {
      const { id } = req.params;
      const { timeZoneId, taskId, collaboratorId } = req.body;

      const resultTimeTrackerService = await this._service.update(id, { timeZoneId, taskId, collaboratorId });
      return res.status(resultTimeTrackerService.status).json(resultTimeTrackerService.json);
    } catch (error) {
      return next(error);
    }
  };

  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TimeTrackerType | ResponseError> | void> => {
    try {
      const { id } = req.params;

      const resultTimeTrackerService = await this._service.delete(id);

      if (resultTimeTrackerService.status !== 200) {
        return res.status(resultTimeTrackerService.status).json(resultTimeTrackerService.json);
      }
      return res.status(resultTimeTrackerService.status).send();
    } catch (error) {
      return next(error);
    }
  };

  public finish = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<TimeTrackerType | ResponseError> | void> => {
    try {
      const { id } = req.params;

      const resultTimeTrackerService = await this._service.finish(id);
      return res.status(resultTimeTrackerService.status).json(resultTimeTrackerService.json);
    } catch (error) {
      return next(error);
    }
  };
}
