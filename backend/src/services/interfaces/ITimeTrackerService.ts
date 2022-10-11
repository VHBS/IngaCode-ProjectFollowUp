import { InputTimeTrackerType, TimeTrackerType } from '../../@types/timeTracker';
import { IService } from './IService';

export interface ITimeTrackerService<T> extends IService<T> {
  create: (entity: InputTimeTrackerType) => Promise<T>;
  update: (id: string, entity: TimeTrackerType) => Promise<T>;
}
