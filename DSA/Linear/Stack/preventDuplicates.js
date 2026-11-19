//Implement a stack that rejects duplicate values 
class Stack{
  constructor(){
    this.stack = []
  }

  push(value){
    if(this.stack.includes(value)){
      console.log('the value is already exists in the stack ')
      return 
    }
    this.stack.push(value)
  }

  pop(){
    if(this.isEmpty())return 'Stack underflow'
    return this.stack.pop()
  }

  isEmpty(){
    return this.stack.length === 0
  }
}

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(1)