const fs = require('fs')
const { json } = require('stream/consumers')
fs.readFile('input.json','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else if(data){
        const user = JSON.parse(data)
        user.name = 'messi'
        const newData = JSON.stringify(user)
        fs.writeFile('input.json',newData,(err)=>{
            if(err)console.log(err)
        })
    }
})