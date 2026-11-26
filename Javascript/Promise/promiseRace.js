const p1 = new Promise((res,rej)=>{
  setTimeout(()=>{
    res('success')
  },2000)
})
const p2 = Promise.reject('failed')
const p3 = Promise.reject('failed')


Promise.race([p1,p2,p3])
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})