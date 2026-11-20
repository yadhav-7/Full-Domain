function x(a){
  return function y(b){
    return function z(c){
      return a*b*c
    }
  }
}

console.log(x(2)(4)(6))