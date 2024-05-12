const express = require('express');
require('dotenv').config()
const app = express();
const PORT =  process.env.PORT || 3000;
// const fs = require('fs');
const fs = require('fs').promises
const path = require('path')
app.use(express.json()); //middleware to get the body
let tempString= '';

app.get('/user/:userId', async (req, res)=>{
    const data = req.body;
    const infoToAppend = JSON.stringify(data);
    try{
        await fs.appendFile(path.join(__dirname, 'files', 'textfiles', 'one.txt'), infoToAppend);
        console.log('write success')
    }
    catch(err){
        return res.json({err})
    }
    res.json({message: 'succesfully appended the file'})
    try{
        const data = await fs.readFile(path.join(__dirname, 'files', 'textfiles', 'one.txt'));
        tempString += data;
        console.log(tempString);
        await fs.unlink(path.join(__dirname, 'files', 'textfiles', 'one.txt'))
    }
    catch(err){
        console.log(err)
    }
})


app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

