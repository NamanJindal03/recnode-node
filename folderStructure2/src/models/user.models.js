const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        rollNumber: {
            type: Number,
            required: true
        },
        name: {
            type: String, 
            required: true
        },
        status: {
            type: String,
            required: false
        },
        email: {
            type: String, 
            required: true,
            unique: true
        },
        age: {
            type: Number,
            required: true,
            min: 18,
            max: 150
        } 
    },
    {timestamps: true}
)

module.exports = mongoose.model('User', userSchema );