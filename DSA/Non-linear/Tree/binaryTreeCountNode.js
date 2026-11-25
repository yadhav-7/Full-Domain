class Node{
  constructor(value){
  this.value = value
  this.left = null
  this.right = null
  }
}

class BinaryTree{
  constructor(){
    this.root = null
  }

  insert(value){
    const newNode = new Node(value)
    if(!this.root){
      this.root = newNode
      return
    }
    let q = [this.root]
    let front = 0
    while(q.length>front){
      let current = q[front++]
      if(!current.left){
        current.left = newNode
        return
      }
      
      if(!current.right){
        current.right = newNode
        return
      }
      
      q.push(current.left)
      q.push(current.right)
    }
  }

  countNodes(){
    if(!this.root)return 0
    let count = 0
    let q = [this.root]
    let front = 0
    while(q.length>front){
      const current = q[front++]
      count++
      if(current.left)q.push(current.left)
      if(current.right)q.push(current.right)
    }
    return count
  }
}

let bt = new BinaryTree()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
console.log(bt.countNodes())