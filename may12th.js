const express = require('express');
require('dotenv').config()
const app = express();
const PORT =  process.env.PORT || 3000;
const fs = require('fs');
//const fs = require('fs').promise
const path = require('path')
app.use(express.json()); //middleware to get the body
let tempString = ''

app.get('/user/:userId', (req, res)=>{
    const data = req.body;
    const infoToAppend = JSON.stringify(data);
    // const isPathValid = fs.existsSync(path.join(__dirname, 'files', 'textfiles'));
    // if(!isPathValid){
    //     res.json({error: 'file path isnt valid'})
    // }
    // console.log(isPathValid)
    // if(isPathValid){
    //     console.log('valid')
    // }
    fs.appendFile(path.join(__dirname, 'files', 'textfiles', 'one.txt'), `\n${infoToAppend}`, (err)=>{
        if(err){
            return res.json({err})
        }
        res.json({message: 'succesfully appended the file'})
        fs.readFile(path.join(__dirname, 'files', 'textfiles', 'one.txt'), (err,data)=>{
            if(err) return;
            tempString += data;
            console.log(tempString);
            fs.unlink(path.join(__dirname, 'files', 'textfiles', 'one.txt'), (err)=>{
                if(err) return;
                console.log('file deteled successfully')
            })
        })
    })
})


app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

