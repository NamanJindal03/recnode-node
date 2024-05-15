const http = require("http");

function handleRequests(req, res){

    let body =''
    req.on('data', (chunk)=>{
        body+= chunk.toString()
    })

    req.on('end', ()=>{
        try{
            const parsedBody = JSON.parse(body)
            req.body = parsedBody;
            handleRoutes(req, res)
            console.log(body)
        }
        catch(error){
            console.log(error.message);
            res.end(JSON.stringify({'error': error.message}))
            // res.end(JSON.stringify({'error': "error2"}))
            // res.end('sample')
        }   
    })





   
}

function handleRoutes(req, res){
    console.log("Hello Server");
    // console.log(req.url)
    if(req.method === 'GET' ){
        if(req.url === '/'){
            console.log(req.body)
            return res.end('I hit the root route in get')
        }
        if(req.url === '/product'){
            return res.end('I hit the product route in get')
        }
        console.log('I am a get method')
    }
    if(req.method === 'POST'){
        if(req.url === '/product'){
            console.log(req.body)


            console.log('arrived here')
            throw new Error('something went wrong custom')
            console.log('arrived here 2')

            res.statusCode = 400;
            return res.end('I hit the product route in post')
        }
        console.log('I am a post method')
    }
    res.end('somethign')
}

const server = http.createServer(handleRequests);

// http.get('/abcd', (req, res) => {
//     console.log(res)
// })
server.listen(3000);


