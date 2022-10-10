import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserMiddleware from '../middlewares/IUserMiddleware';
import UserService from '../services/UserService';

const userRoutes = Router();

const userMiddleware = new UserMiddleware();
const userService = new UserService();
const userController = new UserController(userService);

userRoutes.post('/login', userMiddleware.login, userController.login);

export default userRoutes;
