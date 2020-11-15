class Climate {
    public static data(req: any, res: any) {
        console.log('got request .....', req.body)
        res.json();
    }
}

export default Climate