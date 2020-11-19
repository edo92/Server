import express from 'express';
import { connectMongo } from '../db'

import * as bodyParser from 'body-parser';
import router from '../routes';

class Server {
    public app = express.application;
    private port = 3000;

    constructor() {
        this.app = express();
        this.initializeMiddleware();
    }

    public start(): void {
        connectMongo();
        this.app.listen(this.port, (): void => {
            console.log('Server is listening');
        })
    }

    private bodyParser(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }))
    }

    private initializeMiddleware(): void {
        this.bodyParser();
        this.app.use('/', router);
    }
}

export default Server;