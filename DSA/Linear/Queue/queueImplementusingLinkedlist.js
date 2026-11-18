//Implement queue using linked list 
class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue{
  constructor(){
    this.front = null
    this.rear = null   
    this.limit = 10
    this.size = 0
  }

  enqueue(value){
    if(this.size+1>this.limit){
      console.log('Queue overflow')
      return
    }
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.front = newNode
      this.rear = newNode
      this.size++
      return
    }
    this.rear.next = newNode
    this.rear = newNode
    this.size++
  }

  dequeue(){
    if(this.isEmpty())return 'Queue underflow'
    let removed = this.front
    this.front = this.front.next
    if(!this.front){
      this.rear = null
    }
    this.size--
    return removed.value
  }

  size_(){
    return this.size
  }

  peek(){
    if(this.isEmpty())return 'Queue is empty!'
    return this.front.value
  }

  isEmpty(){
    return this.size===0
  }

  display(){
    let current = this.front
    let res = []
    while(current){
      res.push(current.value)
      current = current.next
    }
    console.log(res)
  }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9)
q.enqueue(10)
q.enqueue(11)
q.display()
console.log(q.size_())