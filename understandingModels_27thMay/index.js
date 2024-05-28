const mongoose = require('mongoose');
const User = require('./models/user.models')

mongoose.connect("mongodb://localhost/t1")

const user1 = new User({rollNumber: 20, name: 'umang', email: 'namanjindal99@gmail.com'});
user1.save().then(()=>{console.log('user created')});

