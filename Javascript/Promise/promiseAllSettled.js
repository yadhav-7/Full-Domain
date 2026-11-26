const p1 = Promise.resolve('success')
const p2 = Promise.reject('success')
const p3 = Promise.resolve('success') 

Promise.allSettled([p1,p2,p3])
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})