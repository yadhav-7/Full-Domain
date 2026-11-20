let ar = [1,2,3,4,5]

let res = ar.map((v)=>v*2)
.filter((v)=>v%2===0)
.reduce((acc,curr)=>acc+=curr,0)

console.log(res)