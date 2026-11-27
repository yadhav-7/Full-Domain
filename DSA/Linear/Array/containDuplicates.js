//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

let ar = [1,2,3,4,5,6]
function containDuplcate(ar){
  let set = new Set()
for(let i = 0 ; i < ar.length ; i++){
  if(set.has(ar[i])){
    return true
  }
  set.add(ar[i])
}
  return false
}
console.log(containDuplcate(ar))