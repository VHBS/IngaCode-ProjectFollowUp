import { UserType } from '../@types/user';
import User from '../sequelize/models/User';
import { IUserService } from './interfaces/IUserService';
import Jwt from '../utils/jwt/jts';
import { UserLoginServiceType } from '../@types/userService';

export default class UserService implements IUserService {
  public login = async (user: UserType): Promise<UserLoginServiceType> => {
    const { userName, password } = user;
    const findUserByUserName = await User.findOne({
      where: { userName },
    });

    if (!findUserByUserName) {
      return { status: 404, json: { message: 'User not found!' } };
    }

    if (findUserByUserName.validPassword(password as string)) {
      const token = Jwt.sign(findUserByUserName.getData);
      return {
        status: 200,
        json: { user: { id: findUserByUserName.id, userName }, token },
      };
    }
    return { status: 400, json: { message: 'Password incorrect!' } };
  };
}
