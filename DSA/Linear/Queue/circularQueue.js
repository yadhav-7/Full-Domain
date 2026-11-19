//Implement circular queue 
class CircularQueue{
  constructor(capacity){
    this.queue = new Array(capacity)
    this.capacity = capacity
    this.size = 0
    this.front = -1
    this.rear = -1
  }
  enqueue(value){
    if(this.isFull()){
      console.log('Queue overflow')
      return
    }
    if(this.isEmpty())this.front = 0
    this.rear = (this.rear+1)%this.capacity
    this.queue[this.rear] = value
    this.size++
  }

  dequeue(){
    if(this.isEmpty())return 'Queue underflow'
    let removed = this.queue[this.front]
    this.queue[this.front]= undefined 
    this.size--
    if(this.size===0){
      this.front=-1
      this.rear=-1
    }else{
      this.front = (this.front+1)%this.capacity
    }
    return removed
  }

  isEmpty(){
    return this.size===0
  }

  isFull(){
    return this.size === this.capacity
  }
}

const q = new CircularQueue(5)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())


q.enqueue(6)
q.enqueue(7)
console.log(q.queue)