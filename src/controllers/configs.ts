import { actions } from '../db';

class Configs {
    public static async getConfigs(_req: any, res: any, _next: any) {
        res.json(await actions.getConfigs());
    }
}

export default Configs


