//Reverse a queue 
class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    if (this.isEmpty()) return 'Queue underflow'
    return this.queue.shift()
  }

  isEmpty() {
    return this.queue.length === 0
  }

  // Reverse using Stack
  reverse() {
    let stack = []

    while (this.queue.length > 0) {
      stack.push(this.queue.shift())
    }

    while (stack.length > 0) {
      this.queue.push(stack.pop())
    }
  }

  // Reverse using Recursion
  reverseUsingRecursion() {
    if (this.isEmpty()) return

    let value = this.queue.shift()

    this.reverseUsingRecursion()

    this.enqueue(value)
  }

  display() {
    return this.queue
  }
}

const q = new Queue()

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)

console.log('Original:', q.display())

q.reverse()

console.log('Reversed using Stack:', q.display())

q.reverseUsingRecursion()

console.log('Reversed using Recursion:', q.display())
