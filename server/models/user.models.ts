import { timeStamp } from "console";
import { sequelize } from "../DBtest/db";
import { DataTypes } from "sequelize";

export interface IUser {
    id: string,
    name: string;
    password: string;
    email: string,
    role: string;
    createdAt: string;
    updatedAt: string;
}