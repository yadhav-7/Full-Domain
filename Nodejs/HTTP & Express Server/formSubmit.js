import express from 'express'
import {fileURLToPath} from 'url'
import path from 'path'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userAr = []
app.get('/',(req,res)=>{
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/submit',(req,res)=>{

    const user = req.body
    userAr.push(user)
    console.log(userAr,'user Array')
    //res.send('success')
    res.json({message:'success'})
})

app.listen(3000,()=>console.log('http://localhost:3000'))