import mongoose from "mongoose";

const Schema = mongoose.Schema

const workrouteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Workroute', workrouteSchema)