//Find nth missing number from an array
let ar = [1,2,3,4,7,8,11,12,13,99,111]
function findNthelement(ar,n){
  let count = 0
  let num = 1
  let i = 0
  while(count<n){
    if(ar[i]!==num){
      count++
    }else{
      i++
    }

    if(count===n)return num
    num++
  }
}
console.log(findNthelement(ar,5))