// Reverse a stack using a temporary stack 
class Stack{
  constructor(){
    this.items=[]
  }
  push(value){
    this.items.push(value)
  }
  pop(){
    if(this.items.length === 0 ){
      return 'Stack underflow'
    }
    return this.items.pop()
  }

  isEmpty(){
    return this.items.length===0
  }

  peek(){
    if(!this.isEmpty())return 'Stack is empty'
    return this.stack[this.stack.length-1]
  }
  
  reverse(){
    let tempStack = []
    while(!this.isEmpty()){
      tempStack.push(this.items.pop())
    }
    this.items=tempStack
  }

  display(){
    console.log(this.items)
  }
}

let st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
st.display()
st.reverse()
st.display()