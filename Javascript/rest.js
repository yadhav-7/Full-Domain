function sample(a,...b){
  console.log(a)
  console.log(b)
}
sample('a','b','c','d','e','f','g')

let ar = [1,2,3,4,5]
let [a,b,...c] = ar
console.log(c)

const user = {
  name:'neymar',
  age:34,
  nation:'brazil'
}

const {name,...rest} = user
console.log(rest)