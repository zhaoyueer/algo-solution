/**
 * 使用前后栈实现浏览器的前进后退
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
    return node.element
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

class SampleBrowser {
  constructor() {
    this.goStack = new StackBasedOnLinkedList()
    this.backStack = new StackBasedOnLinkedList()
  }

  push(name) {
    this.goStack.push(name)
    this.backStack.clear()
  }

  front() {
    const topNode = this.backStack.pop()
    if (!topNode) {
      console.log('无法前进')
      return
    }

    this.goStack.push(topNode)
  }

  back() {
    const topNode = this.goStack.pop()
    if (!topNode) {
      console.log('无法后退')
      return;
    }

    this.backStack.push(topNode)
  }

  displayAllStack() {
    console.log('---浏览页面---')
    this.goStack.display()
    console.log('---后退页面---')
    this.backStack.display()
  }
}

const browser = new SampleBrowser()
browser.push('www.google.com')
browser.push('www.baidu.com')
browser.push('www.github.com')

browser.back()
browser.back()
browser.front()
browser.push('www.new.com')
browser.displayAllStack()
