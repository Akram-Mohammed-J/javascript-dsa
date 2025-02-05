import serializeDLL from "../utils/serializeDLL.js";

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      let poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    } else {
      let poppedNode = this.tail;
      this.tail = poppedNode.prev;
      this.tail.next = null;
      //To remove the backward reference <--- since we were returning the poppedNode,
      // the forward ---> reference for poppedNode always null so no need to update it
      poppedNode.prev = null;
      this.length--;
      return poppedNode;
    }
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      let poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      currentHead.prev = newNode;
      newNode.next = currentHead;
      this.head = newNode;
    }

    this.length++;
    return true;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let mid = this.length / 2;
    let count = null;
    if (index <= mid) {
      count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0 || this.length === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      let beforeNode = this.get(index - 1);
      let AfterNode = beforeNode.next; // save the node which is already there in the insertion index
      beforeNode.next = newNode; // update next ptr beforeNode pointing to the newNode
      newNode.next = AfterNode; // update the next ptr of the new Node pointing the oldNode
      newNode.prev = beforeNode; // update the previous ptr for new Node
      AfterNode.prev = newNode; // update the previous ptr of the oldNode pointing to the newNode
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == this.length - 1) return this.pop();
    if (index == 0) return this.shift();
    let beforeNode = this.get(index - 1);
    let removedNode = beforeNode.next;
    let AfterNode = removedNode.next;
    beforeNode.next = AfterNode;
    AfterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

const dll = new DoublyLinkedList();

dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);

console.log(serializeDLL(dll));

console.log("========================================");

// dll.shift();
// dll.unshift(50);
// console.log(dll.get(-1));
// dll.set(0, 100);

dll.remove(2);

// dll.insert(0, 444);

console.log(serializeDLL(dll));
