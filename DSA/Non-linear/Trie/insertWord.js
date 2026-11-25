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
      if(!current.children.get(char)){
        current.children.set(char,new TrieNode())
      }
      current = current.children.get(char)
    }
    current.isEnd = true
  }
}
const trie = new Trie()
trie.insert('cat')