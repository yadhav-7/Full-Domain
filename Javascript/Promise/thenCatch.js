let promise = new Promise((res,rej)=>{
  let status = true
  
  if(status){
    res('success')
  }else{
    rej('falied')
  }
})

promise.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})