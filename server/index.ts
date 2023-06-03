import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
//import * as cors from 'cors';
import {router} from "./routes"


dotenv.config();

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


const app: Express = express();
const port = process.env.PORT;

/*app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server!!!!');
});

app.use('/apiCrm', router)*/
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server!!!!');
});
app.use('/', router)


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});