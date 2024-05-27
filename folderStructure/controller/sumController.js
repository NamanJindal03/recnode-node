
const sumTill5 = (_, res) => {
    let sum =0;
    for(let i=0; i<6; i++){
        sum += i;
    }
    
    res.send(sum.toString())
}

module.exports = {
    sumTill5
}