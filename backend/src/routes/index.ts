import { Router } from 'express';
import projectRoutes from './projectRouter';
import taskRoutes from './taskRouter';
import userRoutes from './userRouter';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/projects', projectRoutes);
routes.use('/tasks', taskRoutes);

export default routes;
