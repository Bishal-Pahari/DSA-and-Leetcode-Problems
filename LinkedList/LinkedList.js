class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    //for creating new LinkedList
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    //Pushing the new Value into Linked list
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //Popping the value
    if (!this.length) {
      console.log("No items, can't pop!");
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      console.log("Can't shift!!");
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      console.log("Index Overshoot");
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(value, index) {
    if (index >= this.length || index < 0) {
      console.log("Index Overshoot");
      return undefined;
    }
    let indexNode = this.get(index);
    indexNode.value = value;
    return this;
  }

  insert(index, value) {
    if (index > this.length || index < 0) {
      console.log("Index Overshoot");
      return undefined;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index > this.length || index < 0) {
      console.log("Index Overshoot");
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }
    let temp = this.get(index - 1);
    let post = this.get(index);
    temp.next = post.next;
    post.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLL = new LinkedList(4);
myLL.push(5);
myLL.push(6);
myLL.push(7);
myLL.push(7);
myLL.set(13, 0);
myLL.set(12, 1);
myLL.insert(0, 22);
myLL.insert(1, 12);
myLL.insert(1, 13);
myLL.remove(0);
myLL.reverse();

console.log(myLL);
