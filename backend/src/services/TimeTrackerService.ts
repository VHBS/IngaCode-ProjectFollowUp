import { InputTimeTrackerType } from '../@types/timeTracker';
import { TimeTrackerServiceType } from '../@types/timeTrackerService';
import TimeTracker from '../sequelize/models/TimeTracker';
import { ITimeTrackerService } from './interfaces/ITimeTrackerService';

export default class TimeTrackerService implements ITimeTrackerService<TimeTrackerServiceType> {
  public timeTrackerNotFound = 'Time tracker not found!';

  public timeTrackerAlreadyDeleted = 'Time tracker has already been deleted!';

  public findAll = async (): Promise<TimeTrackerServiceType> => {
    const allTimeTrackers = await TimeTracker.findAll({
      where: {
        deletedAt: null,
      },
    });
    return { status: 200, json: allTimeTrackers };
  };

  public create = async (entity: InputTimeTrackerType): Promise<TimeTrackerServiceType> => {
    const newTimeTracker = await TimeTracker.create(entity);
    return { status: 201, json: newTimeTracker };
  };

  public update = async (id: string, entity: InputTimeTrackerType): Promise<TimeTrackerServiceType> => {
    const { timeZoneId, taskId, collaboratorId } = entity;
    const findTimeTrackerById = await TimeTracker.findByPk(id);

    if (!findTimeTrackerById) {
      return { status: 404, json: { message: this.timeTrackerNotFound } };
    }

    if (findTimeTrackerById.deletedAt) {
      return { status: 400, json: { message: this.timeTrackerAlreadyDeleted } };
    }

    await findTimeTrackerById.update({
      timeZoneId,
      taskId,
      collaboratorId,
      updatedAt: new Date(),
    });
    return { status: 200, json: findTimeTrackerById };
  };

  public delete = async (id: string): Promise<TimeTrackerServiceType> => {
    const findTimeTrackerById = await TimeTracker.findByPk(id);

    if (!findTimeTrackerById) {
      return { status: 404, json: { message: this.timeTrackerNotFound } };
    }

    if (findTimeTrackerById.deletedAt) {
      return { status: 400, json: { message: this.timeTrackerAlreadyDeleted } };
    }

    await findTimeTrackerById.update({
      deletedAt: new Date(),
    });

    return { status: 204, json: findTimeTrackerById };
  };
}
