const User = require('../models/user.models');

async function getEmployees(req, res){
    const {pageNo = 1, pageSize = 10} = req.query;

    try{
        const user = await User.find({})
                            .skip((pageNo-1)*pageSize)
                            .limit(pageSize)
                            .exec()

    /* 
        where
        $lt
        $gt
        $gte
        $lte
    */
        res.json(user)
    }
    catch(err){

        res.json({error: 'error'})
    }
}

module.exports = {getEmployees}
