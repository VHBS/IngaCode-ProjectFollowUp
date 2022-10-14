import { CollaboratorType } from './collaborator';
import { ResponseError } from './responseError';

export type CollaboratorServiceType = {
  json: CollaboratorType | CollaboratorType[] | ResponseError;
  status: number;
};
