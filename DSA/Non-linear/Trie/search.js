class TrieNode{
  constructor(){
    this.children = new Map()
    this.isEnd = false
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode()
  }

  insert(word){
    let current = this.root
    for(let char of word){
      if(!current.children.has(char)){
        current.children.set(char,new TrieNode())
      }
      current = current.children.get(char)
    }
    current.isEnd = true
  }

  search(word){
    let current = this.root
    for(let char of word){
      if(!current.children.has(char))return false
      current = current.children.get(char)
    }
    return current.isEnd
  }
}
const trie = new Trie()
trie.insert('cat')
console.log(trie.search('cate'))