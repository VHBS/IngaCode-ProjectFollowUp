import { Router } from 'express';
import ProjectController from '../controllers/ProjectController';
import ProjectMiddleware from '../middlewares/ProjectMiddleware';
import UserMiddleware from '../middlewares/UserMiddleware';
import ProjectService from '../services/ProjectService';

const projectRoutes = Router();

const userMiddleware = new UserMiddleware();

const projectMiddleware = new ProjectMiddleware();
const projectService = new ProjectService();
const projectController = new ProjectController(projectService);

projectRoutes.get('/', userMiddleware.validateJwt, projectController.findAll);
projectRoutes.post('/', userMiddleware.validateJwt, projectMiddleware.create, projectController.create);
projectRoutes.patch('/:id', userMiddleware.validateJwt, projectMiddleware.update, projectController.update);
projectRoutes.delete('/:id', userMiddleware.validateJwt, projectMiddleware.delete, projectController.delete);
projectRoutes.get('/:id', userMiddleware.validateJwt, projectController.findOne);

export default projectRoutes;
