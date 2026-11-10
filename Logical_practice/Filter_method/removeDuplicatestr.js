//Remove all duplicate characters from a string
let str = 'yadhav'
let newStr = str.split('').filter((c,i,ar)=>ar.indexOf(c)===i).join('')
console.log(newStr)