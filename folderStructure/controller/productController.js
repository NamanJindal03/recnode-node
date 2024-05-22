
const getProductFromId = (req, res) => {
    res.send('from the controller')
}

const getProductAbout = (req, res) => {
    res.send('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, sapiente?')
}

module.exports = {
    getProductFromId,
    getProductAbout
}