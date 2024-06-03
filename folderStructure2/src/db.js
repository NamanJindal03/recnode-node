const mongoose = require('mongoose');


function connectMongo(){
    mongoose.connect('mongodb://localhost/prod1')
    .then((mongooseInstance)=> {
        console.log('prod1 db succesfully connected');
        // console.log(mongooseInstance);
    })
    .catch((err)=> {
        console.log('error connecting the database', err);
        process.exit(1); //this exit takes in the parameter called as code -> 0 (1)
        //we are intentioanly exiting our node / we are initioanlly terminatin our node due to some major failure or error
    })
} 
module.exports = connectMongo

/* after the mogno code has landed in catch what will happen to the node server 

    1) it will continue working
    2) it will stop working 
    3) it will keep on working with problems 
    4) none of the above 

    website chalti reti he agar dataserver crash ho jaye bhi to ->
    a query did not work 

    1000 users -> other users 
        1001 -> signup -> it failed -> 

    database itself is not connected -> 
*/