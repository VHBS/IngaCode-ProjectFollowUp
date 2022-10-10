import { ResponseError } from './responseError';
import { UserLoginType } from './user';

export type UserLoginServiceType = {
  json: UserLoginType | ResponseError;
  status: number;
};
