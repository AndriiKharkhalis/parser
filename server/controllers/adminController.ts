// import * as express from "express";ß
import { Request, Response } from "express";
import { DBusers } from "../DBtest/users";

class AdminController {
    async index(req: Request, res: Response) {
        const request = req.body
        console.log('Request =>', req.body)

        return res.json({ result: 200, reqBody: 'req.body' })
    }

    async getAllUsers(req: Request, res: Response) {
        res.json(DBusers);
    }

}
export const adminController = new AdminController()
