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
}
