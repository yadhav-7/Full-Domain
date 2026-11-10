//Find the most frequent character in a string.
let str = 'yadhava'
let maxCount = 0 
let maxChar = ''
let freq = {}
for(let char of str){
  freq[char] = (freq[char]||0)+1
  if(freq[char]>maxCount){
    maxCount = freq[char]
    maxChar = char
  }
}
console.log(`character:${maxChar} and count:${maxCount}`)