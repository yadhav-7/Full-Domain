const p1 = Promise.resolve('success')
const p2 = Promise.resolve('success')
const p3 = Promise.resolve('success') 

Promise.all([p1,p2,p3])
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})