// Remove duplicates from string using hash table 
let str = 'programming'
let map = new Map()
let newStr =""
for(let char of str){
  if(!map.get(char)){
    newStr+=char
    map.set(char,true)
  }
}
console.log(newStr)