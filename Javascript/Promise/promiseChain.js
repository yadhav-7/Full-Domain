let promise = new Promise((res,rej)=>{
  let status = true
  
  if(status){
    res('success')
  }else{
    rej('falied')
  }
})

promise.then((data)=>{
  return data+'1'
})
.then((data)=>{
    return data+'2'
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
  console.log(err)
})