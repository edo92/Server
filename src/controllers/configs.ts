class Configs {
    public static async getConfigs(_req: any, res: any, _next: any) {
        // res.json(await actions.getConfigs());
        res.json({
            limits: {
                temperature: {
                    min: 12,
                    max: 44
                },
                pressure: {
                    min: 12,
                    max: 70
                }
            },
            lighting: {
                on: '10:10',
                off: '20:10'
            }
        })
    }
}

export default Configs


