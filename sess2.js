const express = require('express');
require('dotenv').config()
const app = express();
console.log(process.env.PORT)
const PORT =  process.env.PORT || 3000;
const path = require('path')

app.get('/', (req,res)=>{
    console.log(res);
    // console.log(res);
    res.send('You are cool, and you hit the root path')
})

app.get('/people/:id/:storeId', (req, res) => {
    const paramss = req.params;
    console.log(paramss);
    res.send('evauluating')
})

app.get('/user', (req,res)=>{
    const queryParams = req.query;
    console.log(queryParams);
    const resultBody = {};
    const ageDistribution = {
        1: '0-18',
        2: '18-40',
        3: '40-60',
        4: '60 above'
    }
    const {gender, ageCriteria, locations} = req.query;
    //gender -> Male, Female

    // if(gender != 'male' || gender != 'female'){
    //     //throw error
    // }
    const locArray = locations.split(',');
    console.log(locArray)

    if(gender == 'male' || gender == 'female'){
        //apply filter of male during database query
        resultBody.genderSegregation = gender;

    }
    if(ageDistribution[ageCriteria]){
        resultBody.ageSegegation = ageDistribution[ageCriteria]
    }
    res.send(resultBody)
    // if()

    /* 

    */
})

app.post('/', (req, res) => {
    res.send('ohhhh you wanna hit the post route?')
})

app.get('/page/about', (req, res) => {
    console.log(path.join(__dirname, 'view', 'about.html'))
    res.sendFile(path.join(__dirname, 'view', 'about.html'))
})


app.patch('/', (req, res) => {
    console.log('patch it is')
})
app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

