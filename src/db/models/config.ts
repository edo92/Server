import { model, Schema } from "mongoose"

const ConfigSchema = new Schema({
    lighting: {
        on: {
            type: String
        },
        off: {
            type: String
        }
    }
})

export default model("config", ConfigSchema)