import { Router } from 'express';
import projectRoutes from './projectRouter';
import userRoutes from './userRouter';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/projects', projectRoutes);

export default routes;
