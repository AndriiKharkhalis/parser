import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../error/ApiError';
import User from '../interfaces/user.models'; 

export const chekIsEmailDuplicate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email = ' ' } = req.body;
        if (!email) {
            next(new ApiError('Email is required', 400));
            return;
        }

        const isUserPresent = await User.findOne({ where:{ email: email.toLowerCase().trim() }});

        if (isUserPresent) {
            next(new ApiError('User with this email exists', 409));
            return;
        }

        next();

    } catch (e) {
        next(e);
    }
}

export const userMiddlewares = {
    chekIsEmailDuplicate,
  };