/**
 * 队列：先进先出
 * 基于链表实现的队列
 */

 class Node {
   constructor(element) {
     this.element = element
     this.next = null
   }
 }

 class QueueBasedOnLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  
  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      this.tail.next = new Node(value)
      this.tail = this.tail.next
    }
  }

  dequeue() {
    if (this.head === null) return -1

    this.head = this.head.next
    return this.head.element
  }

  display(root) {
    let current = root
    while(current) {
      console.log(current.element)
      current = current.next
    }
  }

  displayAll() {
    this.display(this.head)
    this.display(this.tail)
  }
 }

 const newQueue = new QueueBasedOnLinkedList()
 newQueue.enqueue('first')
 newQueue.enqueue('second')
 newQueue.enqueue('third')
 newQueue.dequeue()
 newQueue.dequeue()
 newQueue.enqueue('forth')
 newQueue.enqueue('five')

 newQueue.displayAll()