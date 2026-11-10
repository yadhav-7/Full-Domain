//Reverse each word in a sentence (but not the sentence itself).
const str = 'helo how are you'
const newStr = str.split(' ').map((w)=>w.split('').reverse().join('')).join(' ')
console.log(newStr)