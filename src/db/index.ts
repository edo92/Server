import mongoose from 'mongoose';
import * as models from './models';


interface Idb {
    model: any // Fix type of callback model !!
}
interface Icb {
    (db: Idb): void
}
interface Imodel {
    [key: string]: object
}

type Iuri = string | undefined;

interface IOptions {
    useNewUrlParser?: boolean,
    useUnifiedTopology?: boolean,
    useCreateIndex?: boolean,
    useFindAndModify?: boolean,
}

class Database {
    private options: IOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }

    private async connectMongo(uri: Iuri, cb: Icb) {
        if (!uri) return;
        const connect = mongoose.createConnection;
        cb(await connect(uri, this.options));
    }

    private createModel(db: Idb, model: Imodel): void {
        // Maps models sets, each model to mongoose model
        for (let key in model) {
            model[key] = db.model(key, model[key]);
        }
    }

    public connectMognoLocal(): void {
        // Connect mongo local handler
        this.connectMongo(process.env.LOCAL_MONGO_URI, (db: Idb): void => {
            // Set model to local.model object
            this.createModel(db, models.local);
        })
    }

    public connectMongoCloud(): void {
        // Connect mongo cloud handler
        this.connectMongo(process.env.CLOUD_MONGO_URI, (db: Idb): void => {
            // Set model to cloud.model object
            this.createModel(db, models.cloud);
        })
    }
}

export default Database;