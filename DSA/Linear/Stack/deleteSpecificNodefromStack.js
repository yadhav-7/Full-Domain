//Delete a specific node from a stack 
class Node{
  constructor(value){
    this.value = value,
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
    if(this.isEmpty())return 'Stack underflow!'
    const removed = this.top
    this.top = this.top.next
    this.size--
    return removed.value
  }

  isEmpty(){
    return this.size===0
  }

  deleteNode(value){
    if(this.isEmpty())return 'stack underflow'
    let temp = []
    let val
    while(!this.isEmpty()){
      val = this.pop()
      if(val===value)break
      temp.push(val)
    }

    if(val!==value)return 'value doest exists'
    
    for(let i = temp.length-1 ; i >= 0 ; i --){
      this.push(temp[i])
    }
    return value
  }

  display(){
    let current = this.top
    let res = []
    while(current){
      res.push(current.value)
      current = current.next
    }
    console.log(res)
  }
}

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
st.push(6)
console.log('delete',st.deleteNode(3))
st.display()