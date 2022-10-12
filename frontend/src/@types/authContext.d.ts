import { UserLoginType } from './user';

export type AuthContextType = {
  userData: UserLoginType | null;
  setUserData: (user: UserLoginType | null) => void;
  handleLogin: (email: string, password: string) => Promise<UserLoginType | ResponseError>;
}
