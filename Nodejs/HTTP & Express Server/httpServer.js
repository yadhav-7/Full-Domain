//Create an HTTP server without Express that handles GET, POST, PUT and DELETE requests
import http from 'node:http'
http.createServer((req,res)=>{
    if(req.method==='GET'&&req.url==='/'){
        res.write('get page')
        res.end()
    }else if(req.method==='POST'&&req.url==='/create'){
        res.write('create successfull')
        res.end()
    }else if(req.method==='PUT'&&req.url==='/update'){
        res.write('updated successfullly')
        res.end()
    }else if(req.method==='DELETE'&&req.url==='/delete'){
        res.write('deleted successfull')
        res.end()
    }
})
.listen(3000,()=>{
    console.log('server started')
})