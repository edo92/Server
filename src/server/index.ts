import express from 'express';
import * as bodyParser from 'body-parser';

import Database from '../db'
import router from '../routes';

class Server {
  public app = express.application;
  private port = process.env.PORT || 80;

  constructor() {
    this.app = express();
    this.connectDatabases();
    this.initializeMiddleware();
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

  private connectDatabases(): void {
    const db = new Database();
    // db.connectMognoLocal();
    db.connectMongoCloud();
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log('Server is listening');
    })
  }
}

export default Server;