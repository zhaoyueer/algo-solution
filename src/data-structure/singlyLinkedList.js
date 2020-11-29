/**
 * 1) 单链表的插入，删除，查找操作
 * 2）链表中存储的是int类型的数据
 * 3）单链表反转
 */
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head')
  }

  // 查找
  find(value, type = 'value') {
    let node = this.head
    let index = 0
    if (type === 'index') {
      while (node && index !== value) {
        node = node.next
        index++
      }
    } else {
      while (node && node.element !== value) {
        node = node.next
        index++
      }
    }
    return { node, index: node ? index : -1 }
  }

  // 通过值查找
  findByValue(value) {
    const { index } = this.find(value)
    console.log(value, 'is in', index, 'condition')
    return index
  }

  // 通过下标查找
  findByIndex(index) {
    const { node } = this.find(index, 'index')
    console.log(index, 'is', node.element)
    return node.element
  }

  // 查找特定值前置值
  findPrev(value) {
    let prevNode = this.head

    while (prevNode.next && prevNode.next.element !== value) {
      prevNode = prevNode.next
    }

    console.log(value, 'is prev', prevNode)
    if (!prevNode) return null
    return prevNode
  }

  // 向链表末尾追加节点
  append(newValue) {
    const current = new Node(newValue)
    let lastNode = this.head
    while(lastNode.next) {
      lastNode = lastNode.next
    }
    lastNode.next = current
  }

  // 向链表制定元素后插入元素
  insetByValue(newValue, target) {
    const currentNode = new Node(newValue)
    const { node: targetNode } = this.find(target)

    if (!targetNode.next) {
      targetNode.next = currentNode
      return
    }

    const nextNode = targetNode.next
    targetNode.next = currentNode
    currentNode.next = nextNode
  }

  // 移除链表中元素
  remove(value) {
    const { node } = this.find(value)
    const prevNode = this.findPrev(value)
    console.log('center remove', prevNode)
    prevNode.next = node.next
  }

  // revert() {
  //   let prevNode = this.head.next
  //   let currentNode = prevNode.next
  //   let nextNode = currentNode.next
  //   prevNode.next = null
  //   while (currentNode) {
  //     currentNode.next = prevNode
  //     prevNode = currentNode
  //     currentNode = nextNode
  //     nextNode = currentNode && currentNode.next
  //   }
  //   this.head.next = prevNode
  // }
  // 反转
  revert() {
    const root = new Node('head')
    let currentNode = this.head.next
    while(currentNode) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }

  checkCircle() {
    let currentNode = this.head.next
    while(currentNode) {
      if (currentNode.element === this.head.element) return true
      currentNode = currentNode.next
    }
    return false
  }

  // 展示链表结果
  display() {
    let current = this.head.next
    while(current) {
      console.log(current.element)
      current = current.next
    }
  }
}

const list = new LinkedList()
list.append('zhao')
list.append('qian')
list.append('li')
list.append('zhou')
list.findPrev('zhou')
// list.insetByValue('sun', 'zhou')
list.display()
console.log(list.checkCircle())
// list.findByValue('qian')
// list.findByIndex(1)
// list.findPrev('head')
// list.remove('qian')
// list.display()
list.revert()
list.display()