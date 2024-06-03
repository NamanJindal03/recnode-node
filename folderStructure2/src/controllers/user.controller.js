const User = require('../models/user.models');
const User2 = require('../models/user2.models');

async function createUser(req, res){
    const {rollNumber, name, status, email,age } = req.body
    //work with your User model
    try{
        const newUser = new User({rollNumber, name, status, email, age});
        const result = await newUser.save()
        console.log('user saved');
        res.status(201).json({message: 'user created successfully', status: 'success', data: result})
    }
    catch(err){
        res.status(404).json({message: 'something went wrong', status: 'failure', error: err})
    }
}

async function getAllUsers(req, res){
    try{
        const allUsers = await User.find();
        res.status(201).json({message: 'user fetched succesfully', status: 'success', data: allUsers})
    }
    catch(err){
        res.status(500).json({message: 'something went wrong', status: 'failure', error: err})
    }
}

async function getUserById(req, res){
    const {userId} = req.params;
    try{
        const user = await User.findById(userId);
        //error prone path
        if(!user){
            return res.status(400).json({message: 'invalid user id', status: 'failure', error: 'invalid user id'})
        }
        return res.status(200).json({message:'user fetched', status: 'success', data: user})
    }
    catch(err){
        return res.status(500).json({message:'something went wrong', status: 'failure', error: err})
    }
}
//findOne
async function getUserByName(req, res){
    const {name} = req.params;
    try{
        const user = await User.findOne({name});
        if(!user){
            return res.status(400).json({message: 'no user found', status: 'failure', error: 'no user found'})
        }
        return res.status(200).json({message:'user fetched', status: 'success', data: user})
    }
    catch(err){
        return res.status(500).json({message:'something went wrong', status: 'failure', error: err})
    }
}

async function updateUser(req, res){
    const {userId} = req.params;
    try{
        // const user = await User.findOneAndUpdate({_id: userId}, req.body) //we get the previous value by default
        const user = await User.findOneAndUpdate({_id: userId}, req.body, {new: true}) //we get the previous value by default
        console.log(user);
        
        if(!user){
            return res.status(400).json({message: 'no user found', status: 'failure', error: 'no user found'})
        }
        return res.status(200).json({message:'user updated', status: 'success', data: user})
    }
    catch(err){
        return res.status(400).json({message:'failed to update the user', status: 'failure', error: err})
    }
}

async function deleteUser(req, res){
    const {userId} = req.params;
    try{
        const deletedStudent = await User.findOneAndDelete({_id: userId, name: 'naman'});
        // User.findByIdAndDelete(userId)
        //in case of not able to find by id, returns null. In case deleted, returns the deleted entry
        if(!deletedStudent){
            return res.status(400).json({message: 'no user found', status: 'failure', error: 'no user found'})
        }
        return res.status(200).json({message:'user deleted succesfully', status: 'success', data: deletedStudent})
    }
    catch(err){
        return res.status(500).json({message:'failed to delete the user', status: 'failure', error: err})
    }
}

async function checkPastPass(req, res){
    try{
        const newUser = new User2({pastPasswords: [1,2,3], isKycDone: 'yes'});
        const result = await newUser.save()
        return res.status(200).json({message:'user deleted succesfully', status: 'success', data: result})

    }
    catch(err){
        return res.status(500).json({message:'failed to delete the user', status: 'failure', error: err})
    }

} 




async function signup(req, res){
    const {name, username, email, password} = req.body;
    const hashedPass = bcrypt.hashSync(password, saltRounds);

    const newUser = new User({name, username, email, password: hashedPass})
    const user = await newUser.save()
    //at this point in happy case we have created a user succesfully and we are storing the hashed password for him or her.

} 

// async function signin2 (req, res){
//     //take the email and password from the req.body
//     const {email, password} = req.body;
//     //find the user having the email
//     const user = await User.findOne({email});
//     if(!user) return err //complete on your own
    
//     const hashedPass = bcrypt.hashSync(password, saltRounds);
//     if(hashedPass === user.pass){
//         //the id and pass is correct allow user to access my website
//     }
//     const isUserDeetailsCorrect = bcrypt.compareSync(password, user.pass)
//     if(isUserDeetailsCorrect) //allow him or her the access


//     // bcrypt.compareSync
    
// }

module.exports = {createUser, getAllUsers, getUserById, getUserByName, updateUser, deleteUser, checkPastPass}