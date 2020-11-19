class Notification {
    public static async notify(req: any, _res: any, _next: any) {
        console.log('message', req.body)
    }
}

export default Notification