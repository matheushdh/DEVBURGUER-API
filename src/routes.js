import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './middlewares/auth';

import UserController from './controllers/Usercontroller';
import SessionController from './controllers/SessionController';
import ProductController from './controllers/ProductController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', authMiddleware, ProductController.index);

export default routes;
