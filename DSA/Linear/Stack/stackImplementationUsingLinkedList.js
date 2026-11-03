class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}
class Stack{
  constructor(){
    this.top=null
    this.size = 0
  }

  push(value){
    const newNode = new Node(value)
    newNode.next = this.top
    this.top = newNode
    this.size++
  }

  pop(){
    if(this.isEmpty()){
      console.log('Stack underflow')
      return
    }
    const deleted = this.top
    this.top = this.top.next
    this.size--
    return deleted.value
  }

  isEmpty(){
    return this.size===0
  }

  peek(){
    if(!this.top)return 'Stack is empty'
    return this.top.value
  }
  display(){
    let current = this.top 
    let res = []
    while(current){
      res.push(current.value)
      current = current.next
    }
    console.log(res.join('->')+'->null')
  }
}

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
console.log('peek',st.peek())
console.log('poped',st.pop())
st.display()