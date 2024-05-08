const express = require('express');
require('dotenv').config()
const app = express();
const PORT =  process.env.PORT || 3000;

app.get('/people/:id/:storeId', (req, res) => {
    const paramss = req.params;
    console.log(paramss);
    res.send('evauluating')
})

app.get('/users', (req,res)=>{
    //fetch users from db
    const tempDbReturnedUser = {
        name: 'naman',
        age: 10,
        hobbies: 'playing'
    }
    res.json(tempDbReturnedUser)
})

app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

