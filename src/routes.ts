import express from 'express';

import ItemsController from './controllers/itemsController';
import PointsController from "./controllers/pointsController";

const itemsController  = new ItemsController();
const pointsController = new PointsController();

const routes = express.Router();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;