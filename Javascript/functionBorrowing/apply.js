const user = {
  name : 'neymar'
}

function greet(time){
  console.log(`Good ${time} ${this.name}`)
}
greet.apply(user,['morning'])