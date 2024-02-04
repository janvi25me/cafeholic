import mongoose from 'mongoose';

const Schema = mongoose.Schema

const cafeSchema = new Schema({
    Cafe_name: {
        type: String,
        required: true
    },
    Cafe_email: {
        type: String,
        required: true
    },
    Cafe_add: {
        type: String,
        required: true
    },
    Cafe_phone:{
        type: String,
        required: true
    },
    Cafe_pincode: {
        type: Number,
        required: true
    },
    Cafe_image1: {
        type: String,
    },
    Cafe_image2: {
        type: String,
    },
    Cafe_image3: {
        type: String,
    },
    Open_time: {
        type: String,
        required: true 
    },
    Close_time: {
        type: String,
        required: true
    },
    Capacity: {
        type: Number,
        required: true
    },
    Menu_image: {
        type: String,
        required: true 
    }

}, { timestamps: true })

export default mongoose.model('Cafe', cafeSchema)
