//Implement queue using stack 
class Queue{
  constructor(){
    this.stack1=[]
    this.stack2=[]
  }
  enqueue(value){
    this.stack1.push(value)
  }

  dequeue(){
    if(this.isEmpty())return 'Stack underflow'
    if(this.stack2.length===0){
      while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }

  peek(){
    if(this.isEmpty())return 'Stack underflow'
    if(this.stack2.length===0){
      while(this.stack1.length>0){
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2[this.stack2.length-1]
  }
  isEmpty(){
    return this.stack1.length===0&&this.stack2.length===0
  }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
console.log(q.dequeue())
console.log(q.peek())