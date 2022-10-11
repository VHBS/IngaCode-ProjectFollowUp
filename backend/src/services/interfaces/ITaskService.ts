import { InputTaskType, TaskType } from '../../@types/task';
import { IService } from './IService';

export interface ITaskService<T> extends IService<T> {
  create: (entity: InputTaskType) => Promise<T>;
  update: (id: string, entity: TaskType) => Promise<T>;
}
