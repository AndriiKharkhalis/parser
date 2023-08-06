import { Request, Response, Router } from "express";
//import express from "express";

import { adminController } from "../controllers";
import { userMiddlewares } from "../middlewares/user.middlewares";



export const adminRoutes = Router()
//export const app = express()

//export const adminRoutes = () => {
// adminRoutes.get('/index', adminController.index);
// adminRoutes.get('/users', adminController.getAllUsers);

adminRoutes.post('/registration', userMiddlewares.chekIsEmailDuplicate, 
                                  adminController.registration);

adminRoutes.get('/:userIndex', adminController.getUserById);
adminRoutes.post('/login', adminController.login);
adminRoutes.get('/auth', adminController.chek);

// adminRoutes.get('/index', (req: Request, res: Response) => {
//         res.send('admin/index');
//     })
//}