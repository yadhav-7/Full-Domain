//Remove the middle element from a stack 
class Stack{
  constructor(){
    this.stack = []
  }

  push(value){
    this.stack.push(value)
  }

  pop(){
    if(this.isEmpty())return 'Stack underflow'
    return this.stack.pop()
  }

  isEmpty(){
    return this.stack.length === 0
  }

  deleteMid(){
    if(this.isEmpty())return 'Stack undeflow'
    let temp = []
    let mid = Math.floor(this.stack.length/2)
    let removed 
    while(this.stack.length>mid){
      if(mid===this.stack.length-1){
        removed = this.pop()
        break
      }
      temp.push(this.stack.pop())
    }

    while(temp.length>0){
      this.stack.push(temp.pop())
    }
    return removed
  }
}

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
st.push(6)
console.log(st.deleteMid())
console.log(st.stack)