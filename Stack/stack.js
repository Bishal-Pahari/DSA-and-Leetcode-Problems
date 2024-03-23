class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newnode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      console.log("empty Stack !!");
      return undefined;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return temp;
  }
}

const myStack = new Stack(4);
myStack.push(3);
myStack.pop();
myStack.pop();

console.log(myStack);
