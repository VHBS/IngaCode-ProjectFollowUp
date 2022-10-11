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
}
