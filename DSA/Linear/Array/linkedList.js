class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
  }

  prepend(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
      return
    }
    newNode.next = this.head
    this.head = newNode
  }

  append(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
      return
    }

    this.tail.next  = newNode
    this.tail = newNode
  }

  insertAfter(target,value){
    if(!this.head)return false
    const newNode = new Node(value)
    if(this.tail.value===target){
      this.tail.next = newNode
      this.tail=newNode
      return true
    }
    let current = this.head
    let afterTarget 
    while(current){
      if(current.value===target){
        afterTarget = current.next
        current.next = newNode
        newNode.next = afterTarget
        return true
      }
      current = current.next
    }
    return false
  }

  insertBefore(target,value){
    if(!this.head)return false
    const newNode = new Node(value)
    if(this.head.value===target){
      newNode.next = this.head
      this.head = newNode
      return true
    }
    let current = this.head
    while(current.next&&current.next.value!==target){
      current = current.next
    }
    if(!current.next)return false
    const nextValue = current.next
    current.next = newNode
    newNode.next = nextValue
    return true
  }
  
  display(){
    let current = this.head
    let res = []
    while(current){
      res.push(current.value)
      current = current.next
    }
    console.log(res)
  }
}
const ll = new LinkedList()

ll.prepend(20)
ll.prepend(10)
ll.append(30)
ll.append(40)
ll.append(50)
ll.insertAfter(50,25)
console.log(ll.tail)
ll.display()