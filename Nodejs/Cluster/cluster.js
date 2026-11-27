import cluster from 'cluster'
import os from 'os'
import http from 'http'

if(cluster.isPrimary){
    let cpuCount = os.cpus().length
    for(let i = 0 ; i < cpuCount ; i++){
        cluster.fork()
    }
}else{
    http.createServer((req,res)=>{
        if(req.url==='/'){
            res.end('helo')
        }
    }).listen(3000)
}