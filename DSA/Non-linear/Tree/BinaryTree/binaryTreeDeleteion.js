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

  deleteNode(value){
    if(!this.root)return false
    let q = [{node:this.root,parent:null}]
    let front = 0
    let deepest = null
    let deepestParent = null
    let target = null
    while(q.length>front){
      let {node,parent} = q[front++]
      if(node.value===value&&!target)target = node
      deepest = node
      deepestParent = parent
      if(node.left)q.push({node:node.left,parent:node})
      if(node.right)q.push({node:node.right,parent:node})
      
    }

    if(!target)return
    target.value = deepest.value

    if(!deepestParent){
      this.root = null
    }else if(deepestParent.left===deepest){
      deepestParent.left = null
    }else{
      deepestParent.right = null 
    }
    return true
  }
  
  levalOrder(){
    
    if(!this.root)return
    
    let q = [this.root]
    let front = 0
    while(q.length>front){
     
      let current = q[front++]
      console.log(current.value)
      if(current.left)q.push(current.left)
      if(current.right)q.push(current.right)
    }
  }
}

let bt = new BinaryTree()
bt.insert(1)
bt.insert(2)
bt.insert(3)
bt.insert(4)
bt.insert(5)
bt.insert(6)
bt.deleteNode(3)
bt.levalOrder()