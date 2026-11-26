const user = {
  name:'neymar'
}

function greet(time){
  console.log(`good ${time} ${this.name}`)
}
greet.call(user,'morning')