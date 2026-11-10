//Invert an object’s keys and values.
let user = {
  name : 'neymar',
  age : 34,
  nation : 'Brazil'
}
const invert = {}
for(let key in user){
  invert[user[key]] = key
}
console.log(invert)