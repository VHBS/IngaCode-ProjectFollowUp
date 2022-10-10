import { Router } from 'express';
import userRoutes from './userRouter';

const routes = Router();

routes.use('/user', userRoutes);

export default routes;
