import express from 'express';
import * as bodyParser from 'body-parser';
import router from '../routes';

class Server {
    public app = express.application;

    constructor() {
        this.app = express();
        this.initializeMiddleware();
        this.connectToTheDatabase();
    }

    public listen() {
        this.app.listen(3000, () => {
            console.log('Server is listening');
        })
    }

    private initializeMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use('/', router)
    }

    private connectToTheDatabase() {
        // const {
        //     MONGO_USER,
        //     MONGO_PASSWORD,
        //     MONGO_PATH,
        // } = process.env;
        // mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
    }
}

export default Server;