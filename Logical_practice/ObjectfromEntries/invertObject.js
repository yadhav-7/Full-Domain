//Invert an object’s keys and values.
let user = {
  name : 'neymar',
  age : 34,
  nation : 'Brazil'
}

let newObj = Object.fromEntries(Object.entries(user).map(([key,value])=>[value,key]))
console.log(newObj)