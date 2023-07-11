import { Request, Response, Router } from "express";
//import express from "express";

import { adminController } from "../controllers";


export const adminRoutes = Router()
//export const app = express()




//export const adminRoutes = () => {
adminRoutes.get('/index', adminController.index);
adminRoutes.get('/users', adminController.getAllUsers);

// adminRoutes.get('/index', (req: Request, res: Response) => {
//         res.send('admin/index');
//     })
//}