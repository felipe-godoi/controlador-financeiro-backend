import { Request, Response } from "express";
import User, { Login } from "../models/User";

export default class UserController {
    static async insert(req: Request, res: Response){
        let body = req.body;

        let user = new User(0, body.username, body.password, body.email, body.name, body.creationDate, body.updateDate, body.removeDate, body.isActive);
        let response = await user.save();
        
        return res.json(response.toJson());
    }

    static async getAll(req: Request, res: Response){
        let users = await User.getAll();

        return res.json(users);
    }

    static async auth(req: Request, res: Response){
        const login = new Login(req.body.username, req.body.password);

        const response = await User.auth(login);

        return res.json(response);
    }

    static async getOneById(req: Request, res: Response){
        const id = req.params.id;

        const response = await User.getOneById(parseInt(id));

        return res.json(response);
    }
}