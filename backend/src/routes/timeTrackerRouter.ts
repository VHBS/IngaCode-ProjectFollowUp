import { Router } from 'express';
import TimeTrackerController from '../controllers/TimeTrackerController';
import TimeTrackerService from '../services/TimeTrackerService';

const timeTrackerRoutes = Router();

const timeTrackerService = new TimeTrackerService();
const timeTrackerController = new TimeTrackerController(timeTrackerService);

timeTrackerRoutes.get('/', timeTrackerController.findAll);

export default timeTrackerRoutes;
