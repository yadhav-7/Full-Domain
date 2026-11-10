//Remove all duplicate characters from a string
let str = 'yadhav'.split('')
for(let i = 0 ; i < str.length-1 ; i ++){
  for(let j = i+1 ; j < str.length ; j++){
    if(str[i]===str[j]){
        //str.splice(j,1)
      for(let k = j ; k < str.length-1 ; k++){
        str[k] = str[k+1]
      }
      str.length--
    }
  }
}

console.log(str.join(''))