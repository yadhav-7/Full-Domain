// reverse  a string using recursion
let str = 'abcd'
function reverse(str,i){
  if(i===0)return str[0]
  return str[i] + reverse(str,i-1)
}
console.log(reverse(str,str.length-1))