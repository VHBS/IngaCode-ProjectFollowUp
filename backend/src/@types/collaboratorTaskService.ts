import { CollaboratorTaskType } from './collaboratorTask';
import { ResponseError } from './responseError';

export type CollaboratorTaskServiceType = {
  json: CollaboratorTaskType | CollaboratorTaskType[] | ResponseError;
  status: number;
};
