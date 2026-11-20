// First non-repeating character in string 
let str = 'javascript'

let map = new Map()
for(let char of str){
  map.set(char,(map.get(char)||0)+1)
}
for(let [key,count] of map){
  if(count===1){
    console.log(key)
    break
  }
}