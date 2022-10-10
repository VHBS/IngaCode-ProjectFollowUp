import { ProjectType } from './project';
import { ResponseError } from './responseError';

export type ProjectServiceType = {
  json: ProjectType[] | ProjectType | ResponseError;
  status: number;
};
