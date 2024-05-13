const express = require('express');
const fs = require('fs').promises;
const path = require('path')
require('dotenv').config()

const app = express();
const PORT =  process.env.PORT || 3000;

app.use(express.json()); //middleware to get the body

const PRODUCT_FILE_NAME = 'products.json'

app.get('/products', async (req, res) => {
    const data = await fs.readFile(path.join(__dirname, PRODUCT_FILE_NAME));
    return res.json(JSON.parse(data))
    // console.log(data);
})


app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

