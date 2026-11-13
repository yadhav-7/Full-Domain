import { useState } from "react"

const Userform = ()=>{
    const [message , setMessage] = useState('')
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const onSubmit = async(e)=>{
        try {
            e.preventDefault()
            const response = await fetch('http://localhost:3000/submit',{
                method:'post',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email
                })
            })

            let result = await response.json()
            setMessage(result.message)
        } catch (error) {
            console.log('error',error)
        }
    }
    return(
        <>
        {message!==''? <h1>{message}</h1>:
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="">enter you name </label> 
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="">enter your email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit" >submit</button>
        </form>
        }
        </>
    )
}

export default Userform