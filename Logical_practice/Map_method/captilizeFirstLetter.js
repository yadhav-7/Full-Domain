//Write a function to capitalize the first letter of each word in a sentence.
function capitalizeFirstLatter(sentence){
  return sentence.split(' ').map((w)=>w[0].toUpperCase()+w.slice(1)).join(' ')
}

console.log(capitalizeFirstLatter('how are you man'))
