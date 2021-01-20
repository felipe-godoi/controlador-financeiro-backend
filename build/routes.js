"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var BillController_1 = __importDefault(require("./controllers/BillController"));
var UserController_1 = __importDefault(require("./controllers/UserController"));
var routes = express_1.default.Router();
routes.get('/bills', BillController_1.default.teste);
routes.post('/users', UserController_1.default.insert);
routes.get('/users', UserController_1.default.getAll);
routes.get('/user/:id', UserController_1.default.getOneById);
routes.post('/auth', UserController_1.default.auth);
exports.default = routes;
