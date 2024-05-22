const express = require('express');
const app = express();
app.use(express.json()); //middleware to get the body

app.use('/abcd', require('./routes/root.js'))
app.use('/product', require('./routes/product.js'))



app.listen(3000, ()=>{
    // console.log(process)
    console.log(`server is up and running at port 3000`)
})
