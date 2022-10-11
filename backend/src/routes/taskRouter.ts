import { Router } from 'express';
import TaskController from '../controllers/TaskController';
import TaskMiddleware from '../middlewares/TaskMiddleware';
import UserMiddleware from '../middlewares/UserMiddleware';
import TaskService from '../services/TaskService';

const taskRoutes = Router();

const userMiddleware = new UserMiddleware();

const taskMiddleware = new TaskMiddleware();
const taskService = new TaskService();
const taskController = new TaskController(taskService);

taskRoutes.get('/', userMiddleware.validateJwt, taskController.findAll);
taskRoutes.post('/', userMiddleware.validateJwt, taskMiddleware.create, taskController.create);
taskRoutes.patch('/:id', userMiddleware.validateJwt, taskMiddleware.update, taskController.update);
taskRoutes.delete('/:id', userMiddleware.validateJwt, taskMiddleware.delete, taskController.delete);

export default taskRoutes;
