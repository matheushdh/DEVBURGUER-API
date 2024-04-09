import { Router } from 'express';
import UserController from './controllers/Usercontroller';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
