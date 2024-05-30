const User = require('../models/user.models');

async function createUser(req, res){
    const {rollNumber, name, status, email,age } = req.body
    //work with your User model
    try{
        const newUser = new User({rollNumber, name, status, email, age});
        const result = await newUser.save()
        console.log('user saved');
        res.status(201).json({message: 'user created successfully', status: 'success', user: result})
    }
    catch(err){
        res.status(404).json({message: 'something went wrong', status: 'failure', error: err})
    }
}
module.exports = {createUser}