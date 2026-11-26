const user = {
  name : 'neymar'
}

function greet(time){
  console.log(`Good ${time} ${this.name}`)
}
let newGreet = greet.bind(user,'morning')
newGreet()