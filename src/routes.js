import { Router } from 'express';
import UserController from './controllers/Usercontroller';
import SessionControler from './controllers/SessionControler';

const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionControler.store);

export default routes;
