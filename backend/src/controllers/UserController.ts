import { NextFunction, Request, Response } from 'express';
import { ResponseError } from '../@types/responseError';
import { UserLoginType } from '../@types/user';
import { IUserController } from './interfaces/IUserController';
import { IUserService } from '../services/interfaces/IUserService';

export default class UserController implements IUserController {
  private _service: IUserService;

  constructor(service: IUserService) {
    this._service = service;
  }

  public login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<UserLoginType | ResponseError> | void> => {
    try {
      const { userName, password } = req.body;
      const userLoginResponse = await this._service.login({ userName, password });
      return res.status(userLoginResponse.status).json(userLoginResponse.json);
    } catch (error) {
      return next(error);
    }
  };
}
