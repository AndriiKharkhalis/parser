import {Request, Response, Router} from "express";
import {adminRoutes} from "./adminRoutes";
// import {adminController} from "../controllers/adminController";



export const router = Router()

router.use('/admin', adminRoutes)

// export const router = () => {
//     Router.get('/index', adminController.index)
// }

//export * from './adminRoutes';