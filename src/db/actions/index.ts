import * as models from '../models';

interface Iface {
    [key: string]: (object | any) //
}

class Actionsdb {
    public static async getConfigs() {
        let cloudDb: Iface = models.cloud.config;
        return await cloudDb.findOne({});
    }

    public static async saveData(data: object) {
        let localDb: Iface = models.local.climateData;
        return await localDb.create(data);
    }
}

export default Actionsdb