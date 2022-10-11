import ITimeTracker from '../sequelize/models/interfaces/ITimeTracker';

export type InputTimeTrackerType = {
  timeZoneId: string;
  taskId: string;
  collaboratorId: string;
};

export type TimeTrackerType = ITimeTracker | InputTimeTrackerType;
