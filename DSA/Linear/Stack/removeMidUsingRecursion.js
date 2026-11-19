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
    let mid = Math.floor(this.stack.length/2)
    return this.removeMid(mid)
  }

  removeMid(mid){
    if(mid===0){
      return this.stack.pop()
    }
    let top = this.stack.pop()
    let remove = this.removeMid(mid-1)
    this.push(top)
    return remove
  }
}

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
console.log(st.deleteMid())
console.log(st.stack)