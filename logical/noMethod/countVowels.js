// Count the number of vowels in a given string.

let vowels = 'aeiou'
let count = 0
let str = 'neymar junior'
for(let i = 0 ; i < vowels.length ; i ++){
  for(let j = 0 ; j < str.length ; j++){
    if(vowels[i]===str[j])count++
  }
}
console.log('count of vovels appeared in string',count)

