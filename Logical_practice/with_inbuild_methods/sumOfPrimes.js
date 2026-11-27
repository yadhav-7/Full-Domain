//Sum of prime numbers- no need to consider 1
let ar = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
let isPrime = true
for(let i = 0 ; i < ar.length ; i++){
  isPrime = true
  if(ar[i]<2){
    isPrime = false
  }else{
    for(let j = 2; j < ar[i] ; j++){
      if(ar[i]%j==0){
        isPrime=false
        break
      }
    }
  }
  if(isPrime){
    sum+=ar[i]
  }
}
console.log(sum)