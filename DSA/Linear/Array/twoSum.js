
let nums = [2,7,11,15]
function twoSum(ar,target){
  let map = new Map()
  for(let i = 0 ; i < ar.length ; i++){
    let remain = target-ar[i]
    if(map.has(remain)){
      return [i,map.get(remain)]
    }
    map.set(ar[i],i)
  }
  return []
}
console.log(twoSum(nums,9))