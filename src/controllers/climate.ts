import store from '../store';
import actons from '../db/actions';

class Climate {
    public static data(req: any, res: any): void {
        actons.saveData(req.body);
        res.json(req.body);
    }

    public static getData(_req: any, res: any): void {
        res.json(store.getState());
    }
}

export default Climate