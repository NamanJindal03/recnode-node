const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.send('somethign')
})

router.get('/about', (req, res) => {
    console.log(req);
    res.send('about')
})

module.exports = router