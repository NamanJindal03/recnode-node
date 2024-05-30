const mongoose = require('mongoose');
const User = require('./models/user.models')

mongoose.connect("mongodb://localhost/t1")
    .then(()=> console.log('db succesfully connected'))
    .catch((err) => console.log(err))
const user1 = new User({rollNumber: 20, name: 'umang', email: 'namanjindal991@gmail.com', age: 18});
user1.save().then(()=>{console.log('user created')});

/*
    async function sample(){
        await test();
        console.log('testing completed')
    }
*/