import { Router } from 'express';
import CollaboratorController from '../controllers/CollaboratorController';
import UserMiddleware from '../middlewares/UserMiddleware';
import CollaboratorService from '../services/CollaboratorService';

const collaboratorRoutes = Router();

const userMiddleware = new UserMiddleware();

const collaboratorService = new CollaboratorService();
const collaboratorController = new CollaboratorController(collaboratorService);

collaboratorRoutes.get('/', userMiddleware.validateJwt, collaboratorController.findAll);

export default collaboratorRoutes;
