import { Router } from 'express';
import TimeTrackerController from '../controllers/TimeTrackerController';
import TimeTrackerMiddleware from '../middlewares/TimeTrackerMiddleware';
import TimeTrackerService from '../services/TimeTrackerService';

const timeTrackerRoutes = Router();

const timeTrackerMiddleware = new TimeTrackerMiddleware();
const timeTrackerService = new TimeTrackerService();
const timeTrackerController = new TimeTrackerController(timeTrackerService);

timeTrackerRoutes.get('/', timeTrackerController.findAll);
timeTrackerRoutes.post('/', timeTrackerMiddleware.create, timeTrackerController.create);
timeTrackerRoutes.patch('/:id', timeTrackerMiddleware.update, timeTrackerController.update);
timeTrackerRoutes.patch('/finish/:id', timeTrackerController.finish);
timeTrackerRoutes.delete('/:id', timeTrackerMiddleware.delete, timeTrackerController.delete);

export default timeTrackerRoutes;
