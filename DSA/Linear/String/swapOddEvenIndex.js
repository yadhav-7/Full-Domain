//Swap characters at even index with char at odd index
let str = 'abcde'
let newStr = ''
let i = 1
while(str.length>i){
  newStr+=str[i]
  newStr+=str[i-1]
  i+=2
}
if(i===str.length)newStr+=str[i-1]
console.log(newStr)