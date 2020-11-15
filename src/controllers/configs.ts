class Configs {
    public static getConfigs(_req: any, res: any, _next: any) {
        res.json({
            "lighting": {
                "on": "10:05",
                "off": "18:04"
            },
            "limits": {
                "temperature": {
                    "min": 35,
                    "max": 55
                },
                "pressure": {
                    "min": 13,
                    "max": 44
                }
            }
        })
    }
}

export default Configs