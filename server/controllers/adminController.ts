// import * as express from "express";
import { NextFunction, Request, Response } from "express";
import User from "../interfaces/user.models";
import { ApiError } from "../error/ApiError";

class AdminController {
    async registration(req: Request, res: Response, next: NextFunction){
            try {
              const createUser = await User.create(req.body);
        
              res.status(201).json(createUser);
              console.log(res.json);
            } catch (e) {
              next(e);
            }
    }

    async getUserById  (req: Request, res: Response, next: NextFunction) {
        try {
          const { userIndex } = req.params;
          const user = await User.findOne({where: {id: userIndex}});
    
          if (!user) {
            next(new ApiError(`User with ID ${userIndex} not found`, 400));
            return;
          }
          res.json(user);
    
        } catch (e) {
          next(e);
        }
      }

    async login(req: Request, res: Response){

    }

    async chek(req: Request, res: Response){
        const {id} = req.query;
        res.json(id)
    }

}

export const adminController = new AdminController();
