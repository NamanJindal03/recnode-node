const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        rollNumber: {
            type: Number,
        },
        name: {
            type: String, 
        },
        status: {
            type: String,
        },
        email: {
            type: String,
        },
        age: {
            type: Number,
            min: 18,
            max: 150
        },
        pastPasswords: {
            type: [String],
        },
        isKycDone: {
            type: String,
            enum: ['pending', 'progress', 'complete'],
            default: 'pending'
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('User2', userSchema );