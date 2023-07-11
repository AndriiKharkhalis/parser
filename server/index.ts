import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();


//import * as cors from 'cors';
import { UserSchema } from "./DBtest/models/user.schema";
import { router } from "./routes";
import { sequelize } from "./DBtest/db";
// import { config } from './config';
import { PORT, CLIENT_URL } from "./config/config";


// app.use(cors({
//     credentials: true,
// //    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//     origin: process.env.CLIENT_URL,
// }));
//app.use(cors<Request>());

// server.use(cors<Request>());

/*

//get router
const router = express.Router();

//options for cors midddleware
const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: process.env.CLIENT_URL,
    preflightContinue: false,
};

//use cors middleware
router.use(cors(options));

//add your routes

//enable pre-flight
router.options('*', cors(options));
*/


const app = express();
// const port = process.env.PORT;

// const sequelize = new Sequelize();


const start = async () => {
    try {

        await sequelize.authenticate();
        await Promise.all([
            UserSchema.sync(),
            // Додайте інші схеми сюди
        ]);
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });

    } catch (e) {
        console.log(e);
    }
}

/*app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server!!!!');
});

app.use('/apiCrm', router)*/
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server!!!!');
});
app.use('/', router);

start()