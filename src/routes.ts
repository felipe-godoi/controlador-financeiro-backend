import express from "express";
import BillController from "./controllers/BillController";
import UserController from "./controllers/UserController";

const routes = express.Router();

routes.get('/bills', BillController.teste);
routes.post('/users', UserController.insert);
routes.get('/users', UserController.getAll);
routes.get('/user/:id', UserController.getOneById);
routes.post('/auth', UserController.auth);

export default routes;