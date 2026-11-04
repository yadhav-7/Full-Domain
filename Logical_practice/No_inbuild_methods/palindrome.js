// Check if a string is a palindrome
let str = 'non'
let reversed = ''
for(let i = str.length - 1 ; i >=0 ; i-- ){
  reversed+=str[i]
}

if(str===reversed){
  console.log(str,' is a palindrome')
}else{
  conosole.log(str,' is not palindrome')
}