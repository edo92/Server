class Dataformatter {
    public static withParentKey = (data: any) => {
        let obj: any = {};
        for (let key in data) {
            obj[`climate.${key}`] = data[key].data;
        }
        return obj;
    }

    public static originalObject = (data: any) => {
        let obj: any = {};
        for (let key in data) {
            obj[key] = data[key].data;
        }
        return obj;
    }
}

export default Dataformatter;