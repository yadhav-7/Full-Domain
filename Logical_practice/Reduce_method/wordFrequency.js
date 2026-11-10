//Count the frequency of each word in a string using an object.
const str = 'hy how are you hy'
const freq = str.split(' ').reduce((acc,curr)=>{
  acc[curr] = (acc[curr]||0)+1
  return acc
},{})
console.log(freq)