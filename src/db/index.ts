import mongoose from 'mongoose';
import * as models from './models';

const connectMongo = () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/chatapp';

    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', true);

    const mdbConfig = {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true
    };
    mongoose.connect(MONGODB_URI, mdbConfig);

    mongoose.connection.once('open', () => {
        console.log('mongoose connection successful');
    })
}

export { connectMongo, models }