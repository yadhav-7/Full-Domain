import fs from 'fs'

fs.readFile('sample.txt','utf8',(err,data)=>{
    
    if(err){
       
        console.log('err in file read',err)
    }else if(data){
       

        fs.writeFile('newSample.txt',data,(err)=>{
            if(err)console.log('err in file write',err)
        })
    }
})