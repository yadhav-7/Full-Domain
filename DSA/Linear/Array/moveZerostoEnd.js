// move all zeros to the end
function moveZerosEnd(ar){
  let start = 0 
  let end = ar.length-1
  while(start<end){
    if(ar[start]===0&&ar[end]!==0){
        
      [ar[start],ar[end]] = [ar[end],ar[start]]
      
      start++
      end--
    }else{
      if(ar[start]!==0)start++
      if(ar[end]===0)end--
    }
  }
  return ar
}
console.log(moveZerosEnd([0,2,3,0,5,1,0,4,6,0]))