import { Router } from 'express';
import TaskController from '../controllers/TaskController';
import TaskMiddleware from '../middlewares/TaskMiddleware';
import TaskService from '../services/TaskService';

const taskRoutes = Router();

const taskMiddleware = new TaskMiddleware();

const taskService = new TaskService();
const taskController = new TaskController(taskService);

taskRoutes.get('/', taskController.findAll);
taskRoutes.post('/', taskMiddleware.create, taskController.create);

export default taskRoutes;
