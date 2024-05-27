//creating a model/schema -> has a generic boilerplate which you need to follow each and everytime 

const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     //which we do not use
//     name: String,
//     rollNumber: Number,
//     isFemale: Boolean,
// })

const userSchema = new mongoose.Schema({
    rollNumber: {
        //predefined key
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
    }

    //name, isFemale, status, email
})

module.exports = mongoose.model('User', userSchema );

/* 


*/

/* 
    name -> naman
    email -> namanjindal@gmail.com

    name -> arpit
    email -:> arpit#gmail.com

    name -> ambuj 
    email -> ambuj@gmail.com

    name -> nj
    email -> namanjindal@gmail.com


*/