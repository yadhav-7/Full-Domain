const p1 = Promise.reject('failed')
const p2 = Promise.reject('failed')
const p3 = new Promise((res,rej)=>{
  setTimeout(()=>{
    res('success')
  },2000)
})

Promise.any([p1,p2,p3])
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})