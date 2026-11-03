class Stack{
  constructor(limit = 10){
    this.stack = []
    this.limit = limit
  }

  push(value){
    if(this.size()>=this.limit){
      console.log('Stack overflow')
      return 
    }
    this.stack.push(value)
  }

  pop(){
    if(this.isEmpty())return 'Stack underflow'
    return this.stack.pop()
  }
  
  isEmpty(){
    return this.stack.length===0
  }

  size(){
    return this.stack.length 
  }

  peek(){
    if(this.isEmpty())return 'Stack is empty'
    return this.stack[this.size()-1]
  }

  display(){
    let st = []
    for(let i = 0 ; i < this.stack.length ; i++){
      st.push(this.stack[i]+'->')
    }
    st.push("null")
    console.log(st.join(''))
  }
}

let st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
st.push(6)
st.push(7)
st.push(8)
st.push(9)
st.push(10)
st.push(11)
st.push(12)
console.log(st.peek())
console.log(st.pop())
st.display()