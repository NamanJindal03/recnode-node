
const fs = require('fs');
// const fsPromise = require('fs').promises
const path = require('path');

/* 
    CRUD ->
    Create -> create the file (write)
    Read -> read the file
    Update -> overwrite the file or append the file
    Delete -> delete the file 
*/
// console.log(path.join(__dirname, 'impFiles', 'file1.txt'))


// console.log(path.join(__dirname, '..', 'impFiles', 'file1.txt'))

// fs.writeFile(path.join(__dirname, 'impFile', 'file1.txt'), 'now I have changed it', (err)=>{
//     if(err) {console.log(err); return}
//     console.log('write file is completerd')
// })
// console.log('execute before')
// console.log('execute before')
// console.log('execute before')
// console.log('execute before')
// console.log('execute before')

// fs.writeFile(path.join(__dirname,'impFiles',"fileA.txt"),'start a', (err)=>{
//     console.log(err)
// } )

// fs.writeFile(path.join(__dirname,'impFiles',"fileA.txt"),"start a",(err)=>{
//     // console.log(err)
//     if(err){
//         console.log(err);
//         return;
//     }
    fs.appendFile(path.join(__dirname,'impFiles',"fileA.txt"),"\n now we are appending on A",(err)=>{
        if(err){
            console.log(err);
            return;
        }
    })

    // fs.writeFile(path.join(__dirname,'impFiles', "fileB.txt"),"A worked",(err)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
        

    //     fs.writeFile(path.join(__dirname,'impFiles', "fileC.txt"),"B worked",(err)=>{
    //         // console.log(err)
    //         if(err){
    //             console.log(err);
    //             return;
    //         }
    //     })
    // })
// })  


/* 
    A -> 'start a'
    B -> 'a worked'
    C -> 'b worked'

*/