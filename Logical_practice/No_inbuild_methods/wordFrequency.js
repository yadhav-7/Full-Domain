//Count the frequency of each word in a string using an object.
const str = 'hy how are you hy'.split(' ')
const freq = {}
for(let char of str){
  freq[char] = (freq[char]||0)+1
}
console.log(freq)