import store from '../store';

class Climate {
    public static data(req: any, res: any): void {
        store.setState({ climate: req.body });
        res.json();
    }

    public static getData(_req: any, res: any): void {
        res.json(store.getState());
    }
}

export default Climate