import { Request, Response } from "express";

export default class BillController {
    static teste(req: Request, res: Response) {
        return res.json("WORKING!!!");
    }
}