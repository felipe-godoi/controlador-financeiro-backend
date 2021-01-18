import express from "express";
import BillController from "./controllers/BillController";

const routes = express.Router();

routes.get('/bills', BillController.teste);

export default routes;