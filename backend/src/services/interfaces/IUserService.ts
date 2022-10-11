import { UserType } from '../../@types/user';
import { UserLoginServiceType } from '../../@types/userService';

export interface IUserService {
  login: (user: UserType) => Promise<UserLoginServiceType>;
}
