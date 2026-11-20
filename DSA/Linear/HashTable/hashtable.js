//Implement hash table with collision handling and rehashing
class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
    this.threashold = 0.75
  }
  hash(key){
    let total = 0
    for(let i = 0 ; i < key.length ; i++){
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  loadFactor(){
    let count = 0
    for(let bucket of this.table){
      if(bucket)count+=bucket.length
    }
    return count/this.size
  }
  set(key,value){
    const index = this.hash(key)
    if(!this.table[index])this.table[index] = []

    for(let pair of this.table[index]){
      if(pair[0]===key){
        pair[1] = value
        return 
      }
    }

    this.table[index].push([key,value])

    if(this.loadFactor()>this.threashold){
      this.rehash()
    }
  }

  get(key){
    const index = this.hash(key)

    if(!this.table[index])return undefined
    
    for(let pair of this.table[index]){
      if(pair[0]===key){
        return pair[1]
      }
    }

    return undefined
  }

  remove(key){
    const index = this.hash(key)
    if(!this.table[index]) return false

    for(let i = 0 ; i < this.table[index].length ; i++){
      if(this.table[index][i][0]===key){
        this.table[index].splice(i,1)
        return true
      }
    }
    return false
  }

  rehash(){
    let oldTable = this.table
    this.size = this.size*2
    this.table = new Array(this.size)
    
    for(let bucket of oldTable){
      if(bucket){
        for(let [key,value] of bucket){
          const index = this.hash(key)
          if(!this.table[index])this.table[index]=[]
          this.table[index].push([key,value])
        }
      }
    }
  }
   display() {
    for (let i = 0; i < this.size; i++) {
      console.log(i, this.table[i]);
    }
  }
}

const ht = new HashTable(4)
ht.set('ab','neymar')
ht.set('ba',34)
ht.set('bc',34)
ht.display()