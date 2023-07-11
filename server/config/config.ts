import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const CLIENT_URL = process.env.CLIENT_URL;

export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;



// export const config = {
//     PORT: process.env.PORT,

//     CLIENT_URL: process.env.CLIENT_URL,

//     DB_NAME: process.env.DB_NAME,
//     DB_USER: process.env.DB_USER,
//     DB_PASSWORD: process.env.DB_PASSWORD,
//     DB_HOST: process.env.DB_HOST,
//     DB_PORT: process.env.DB_PORT
// }