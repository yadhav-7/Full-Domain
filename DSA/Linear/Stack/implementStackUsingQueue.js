// Implement a stack using a queue 
class Stack{
  constructor(){
    this.queue = []
  }

  push(value){
    this.queue.push(value)
    let size = this.queue.length-1
    while(size>0){
      this.queue.push(this.queue.shift())
      size--
    }
  }

  pop(){
    if(this.isEmpty()) return 'stack underflow'
    return this.queue.shift()
  }

  peek(){
    if(this.isEmpty())return 'stack is empty'
    return this.queue[0]
  }

  isEmpty(){
    return this.queue.length === 0
  }

  display(){
    console.log(this.queue)
  }
}

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
st.push(6)
console.log('pop',st.pop())
console.log('pop',st.pop())
console.log(st.peek())
st.display()