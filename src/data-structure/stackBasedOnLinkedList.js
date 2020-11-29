/**
 * 栈：后进先出
 * 基于链表实现的栈
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class StackBasedOnLinkedList {
  constructor() {
    this.top = null
  }

  push(value) {
    const node = new Node(value)
    if (this.top) {
      node.next = this.top
      this.top = node
    } else {
      this.top = node
    }
  }

  pop() {
    const node = this.top
    if (!node) return false

    this.top = node.next
  }

  clear() {
    this.top = null
  }

  display() {
    let current = this.top
    while(current) {
      console.log(current.element)
      current = current.next
    }
  }
}

const newStack = new StackBasedOnLinkedList()
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.pop()
newStack.display()

exports.CreatedStack = StackBasedOnLinkedList