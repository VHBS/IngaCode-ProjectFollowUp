import { ResponseError } from './responseError';
import { TimeTrackerType } from './timeTracker';

export type TimeTrackerServiceType = {
  json: TimeTrackerType | TimeTrackerType[] | ResponseError;
  status: number;
};
