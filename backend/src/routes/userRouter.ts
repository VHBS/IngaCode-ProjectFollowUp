import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const userRoutes = Router();

const userService = new UserService();
const userController = new UserController(userService);

userRoutes.post('/login', userController.login);

export default userRoutes;
