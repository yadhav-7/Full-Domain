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

  postOrder(node = this.root){
    if(!node)return
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.value)
  }
}

let bt = new BinaryTree()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
bt.insert(7)
bt.postOrder()