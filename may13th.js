const express = require('express');
const fs = require('fs').promises;
const path = require('path')
require('dotenv').config()

const app = express();
const PORT =  process.env.PORT || 3000;

app.use(express.json()); //middleware to get the body

const PRODUCT_FILE_NAME = 'products.json'

async function readFileData(){
    const data = await fs.readFile(path.join(__dirname, PRODUCT_FILE_NAME));
    return JSON.parse(data);
}

app.get('/products', async (req, res) => {
    const data = await readFileData();
    return res.json(data)
    
    // console.log(data);
})

app.post('/products', async (req, res) => {
    const productData = req.body;
    let isValid = true;
    const schemaValidProduct = productData.map((product)=>{
        const {id, productName, price} = product;
        if(!id || !productName || !price){
            isValid = false;
            return undefined;
        }
        return {id, productName, price}
    })
    if(!isValid){
        return res.status(400).json({error: 'product schema not correct'})
    }

    try{
        await fs.writeFile(path.join(__dirname, PRODUCT_FILE_NAME), JSON.stringify(schemaValidProduct));
        return res.status(200).json({data: schemaValidProduct, message: 'products overwritten succesfully'})
    }
    catch(err){
        return res.status(400).json({error: err})
    }
})

app.put('/products', async (req, res) => {
    const {id, productName, price} = req.body;
    const newProduct = {id, productName, price}
    try{
        const data = await fs.readFile(path.join(__dirname, PRODUCT_FILE_NAME));
        let dataArr = JSON.parse(data);
        const isDuplicate = dataArr.find((product)=> product.id == newProduct.id);
        if(isDuplicate){
            return res.status(400).json({error: 'product already exists'})  
        }
        dataArr.push(newProduct);
        await fs.writeFile(path.join(__dirname, PRODUCT_FILE_NAME), JSON.stringify(dataArr));
        return res.status(200).json({data: newProduct, message: 'product added'})
    }
    catch(err){
        return res.status(400).json({error: err})
    }

})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;

    const data = await readFileData();
    console.log(data)
    const isProductPresent = data.find((product)=> product.id == id);
    if(!isProductPresent){
        return res.status(400).json({error: 'product with such id does not exist'})  
    }
    return res.status(200).json({product: isProductPresent, message: 'success'})

})

app.put('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const {productName, price} = req.body;

    const data = await readFileData();
    const isProductPresent = data.find((product)=> product.id == id);
    if(!isProductPresent){
        return res.status(400).json({error: 'product with such id does not exist'})  
    }
    const newData = data.filter((product)=>product.id != id);
    newData.push({id, productName, price})
    await fs.writeFile(path.join(__dirname, PRODUCT_FILE_NAME), JSON.stringify(newData));
    return res.status(200).json({ message: 'product updated succesfully'})
})

app.listen(PORT, ()=>{
    // console.log(process)
    console.log(`server is up and running at port ${PORT}`)
})

