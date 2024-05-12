const express = require('express');
require('dotenv').config()
const app = express();
const PORT =  process.env.PORT || 3000;
const fs = require('fs');
const path = require('path')
app.use(express.json()); //middleware to get the body

app.get('/user/:userId', (req, res)=>{
    const data = req.body;
    const infoToAppend = JSON.stringify(data);
    fs.appendFile(path.join(__dirname, 'files', 'textfiles', 'one.txt'), `\n${infoToAppend}`, (err)=>{
        if(err){
            return res.json({err})
        }
        return res.json({message: 'succesfully appended the file'})
    })
})


app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

