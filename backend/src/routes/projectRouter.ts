import { Router } from 'express';
import ProjectController from '../controllers/ProjectController';
import ProjectService from '../services/ProjectService';

const projectRoutes = Router();

const projectService = new ProjectService();
const projectController = new ProjectController(projectService);

projectRoutes.get('/', projectController.findAll);

projectRoutes.post('/', projectController.create);

export default projectRoutes;
