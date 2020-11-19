import * as models from '../models';

class Actionsdb {
    public static async getConfigs() {
        return await models.Config.findOne({});
    }
}

export default Actionsdb