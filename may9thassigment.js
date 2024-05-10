const express = require('express');
require('dotenv').config()
const app = express();
const PORT =  process.env.PORT || 3000;

app.use(express.text({type: 'text/*'}))
app.use(express.json());

app.use((req, res)=>{
    
})

function calcSum(arr, length){
    if(length === 0){
        return 0;
    }
    return arr[length-1] + calcSum(arr, length-1)
}

app.get('/sum', (req,res)=>{
    //iterative
    const numArr = req.body;
    if(numArr.length > 5){
        res.status(400).json({error: 'number length exceeded'})
    }
    try{
        let sum = 0;
        sum = calcSum(numArr, numArr.length);
        // numArr.forEach(element => {
        //     sum+=element
        // });
    
        res.status(200).json({sum, success: true})
    }
    catch(err){
        res.status(400).json({error: 'something went wrong'})
    }
    

    // res.send('something')
})

app.get('/try', (req, res)=>{
    console.log(req.body)
    res.send('abc');
})

app.delete('/try2', (req, res)=>{
    console.log(req.body)
    res.json({name: 'naman'})
})




app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

