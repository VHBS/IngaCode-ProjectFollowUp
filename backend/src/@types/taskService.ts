import { ResponseError } from './responseError';
import { TaskType } from './task';

export type TaskServiceType = {
  json: TaskType | TaskType[] | ResponseError;
  status: number;
};
