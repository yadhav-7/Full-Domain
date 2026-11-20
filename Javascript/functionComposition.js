function compose(f,g){
  return function(value){
   return f(g(value))
  }
}

function add(value){
  return value+10
}

function mul(value){
  return value*2
}

const composed = compose(add,mul)
console.log(composed(10))