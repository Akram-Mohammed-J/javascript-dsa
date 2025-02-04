class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined; // If list is empty, return undefined

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      prev.next = null;
      this.tail = prev;
    } else {
      // If there was only one node
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current; // Return the removed node
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  unShift(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Insert the new node at the beginning
      newNode.next = this.head;
      this.head = newNode;

      //      (or )
      // let currHead = this.head; // Store the current head
      // this.head = newNode; // Update head to new node
      // newNode.next = currHead; // Link new node to previous head
    }

    this.length++; // Increase the length
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return true;
  }

  insert(position, value) {
    // Check if the position is out of bounds
    if (position < 0 || position > this.length) {
      return false;
      // If the position is 0, insert the new node at the head
    } else if (position === 0) {
      this.unShift(value);
      return true;
    }
    // If the list was empty, update the tail to the new node
    else if (this.length === position) {
      this.push(value);
      return true;
    } else {
      // Create a new node with the given value
      const newNode = new Node(value);

      // Traverse the list to find the node before the insertion point
      let nodeBeforeInsertionPoint = this.get(position - 1);

      //to maintain the link of remaining nodes after the new node is inserted at the position  we need to store the next node of the node before insertion point
      let currentNodeInThatPosition = nodeBeforeInsertionPoint.next;

      // link the newnode next pointer to the next node of the node before insertion point
      newNode.next = currentNodeInThatPosition;

      // Insert the new node by updating the next pointers
      nodeBeforeInsertionPoint.next = newNode;
      // Increment the length of the list
      this.length++;
      return true;
    }
    // Return the modified list
  }

  remove(index) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index == 0) {
      return this.shift();
    } else {
      let nodeBeforeDeletionPoint = this.get(index - 1);
      // ActualNode to be removed
      let removedNode = nodeBeforeDeletionPoint.next;

      // bypass the node and point to next node of the removed node
      nodeBeforeDeletionPoint.next = removedNode.next;
      this.length--;
      return removedNode.value;
    }
  }

  reverse() {
    if (!this.head || !this.head.next) return; // Edge case: Empty or single-node list

    this.tail = this.head; // Store original head as new tail
    let prev = null;
    let current = this.head;

    while (current !== null) {
      let follow = current.next; // Save next node
      current.next = prev; // Reverse pointer
      prev = current; // Move prev forward
      current = follow; // Move current forward
    }

    this.head = prev; // Update head to new first node
    this.tail.next = null; // Ensure new tail points to null
  }
}

const sll = new SinglyLinkedList();
// sll.push(30);
// sll.push(40);
// sll.push(50);

// Insert at the beginning
// sll.insert(0, 20);
// console.log(JSON.stringify(sll)); // Expected: { "head": { "value": 20, "next": { "value": 30, "next": { "value": 40, "next": { "value": 50, "next": null } } } }, "tail": { "value": 50, "next": null }, "length": 4 }

// // Insert in the middle
// sll.insert(2, 35);
// console.log(JSON.stringify(sll)); // Expected: { "head": { "value": 20, "next": { "value": 30, "next": { "value": 35, "next": { "value": 40, "next": { "value": 50, "next": null } } } } }, "tail": { "value": 50, "next": null }, "length": 5 }

// // Insert at the end
// sll.insert(5, 60);
// console.log(JSON.stringify(sll)); // Expected: { "head": { "value": 20, "next": { "value": 30, "next": { "value": 35, "next": { "value": 40, "next": { "value": 50, "next": { "value": 60, "next": null } } } } } }, "tail": { "value": 60, "next": null }, "length": 6 }
// console.log("removed node ", sll.pop());
// console.log("removed node from the begining ", sll.shift());

// sll.unShift("Hello");̃

sll.push("Hello");
sll.push("Akram");
sll.push("Good Bye");
sll.push("<3");
// sll.insert(2, "I am inserted at 2nd position");
sll.remove(1);
console.log(JSON.stringify(sll));
