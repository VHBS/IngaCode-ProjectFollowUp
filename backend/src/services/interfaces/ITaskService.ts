import { InputTaskType } from '../../@types/task';
import { IService } from './IService';

export interface ITaskService<T> extends IService<T> {
  create: (entity: InputTaskType) => Promise<T>;
}
