import { model, Schema } from "mongoose"

const ConfigSchema = new Schema({
    lighting: {
        on: {
            type: String
        },
        off: {
            type: String
        }
    },
    limits: {
        temperature: {
            min: Number,
            max: Number
        },
        pressure: {
            min: Number,
            max: Number
        }
    }
})

export default model("config", ConfigSchema)
