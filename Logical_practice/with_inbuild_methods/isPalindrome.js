//Check if a string is a palindrome (ignore spaces and case).
let str = ' h e h '
let cleanedStr = str.toLowerCase().replaceAll(" ","")
if(cleanedStr===cleanedStr.split('').reverse().join('')){
  console.log(str,'is palindrome')
}else{
  console.log(str,'is not palindrome')
}