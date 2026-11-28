//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place so that each unique element appears only once.Return the number of unique elements.
let nums = [1, 1, 2, 2, 3]
function removeDup(ar){
  let start = 0
  for(let end = 1 ; end < ar.length ; end++){
    if(ar[start]!==ar[end]){
      ar[++start]=ar[end]
    }
  }
   return ar.slice(0,start+1)
}

console.log(removeDup(nums))