import * as express from "express";
import {Request, Response} from "express";


class AdminController {
    async index (req: Request, res: Response){
        const request = req.body
        console.log('Request =>', req.body)

        return res.json({result: 200, reqBody: 'req.body'})
    }

}
export const adminController = new AdminController()
