import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined;


export const sequelize = new Sequelize (
        process.env.DB_NAME as string,
        process.env.DB_USER as string,
        process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: dbPort
    }
);