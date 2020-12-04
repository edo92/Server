import express from 'express';
import store from '../store';

class AtlasProb {
    public static receiveProbData(req: express.Request, res: express.Response) {
        store.setState(req.body);
        res.status(200).json();
    }
}

export default AtlasProb;