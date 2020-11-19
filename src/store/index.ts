class Store {
    public state: object = {};

    public setState(data: object): void {
        this.state = { ...this.state, ...data };
    }

    public getState(): object {
        return this.state;
    }
}

export default new Store;