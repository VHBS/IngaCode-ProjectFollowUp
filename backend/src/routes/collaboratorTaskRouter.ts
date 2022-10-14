import { Router } from 'express';
import CollaboratorTaskController from '../controllers/CollaboratorTaskController';
import CollaboratorTaskMiddleware from '../middlewares/CollaboratorTaskMiddleware';
import UserMiddleware from '../middlewares/UserMiddleware';
import CollaboratorTaskService from '../services/CollaboratorTaskService';

const collaboratorTaskRoutes = Router();

const userMiddleware = new UserMiddleware();

const collaboratorTaskMiddleware = new CollaboratorTaskMiddleware();
const collaboratorTaskService = new CollaboratorTaskService();
const collaboratorTaskController = new CollaboratorTaskController(collaboratorTaskService);

collaboratorTaskRoutes.post(
  '/',
  userMiddleware.validateJwt,
  collaboratorTaskMiddleware.create,
  collaboratorTaskController.create,
);

export default collaboratorTaskRoutes;
