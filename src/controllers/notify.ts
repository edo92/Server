import express from 'express';
import actions from '../db/actions';

class Notification {
    public static async notify(_req: express.Request, res: express.Response) {
        let configs = await actions.getConfigs();
        res.status(200).json(configs);
    }
}

export default Notification