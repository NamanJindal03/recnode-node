const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
    {
        address1:{
            type: String,
            required: true
        },
        address2: {
            type: String,
        },
        state:{
            type: String,
        },
        city:{
            type: String,
        },
        pinCode: {
            type: String,
        }
    }
)

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        email: {
            type: String, 
            required: true,
            unique: true
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: addressSchema
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('User', userSchema );

/* 
    swiggy -> 

    apartment/ building/ society

    area

    city

    state

    pincode

*/