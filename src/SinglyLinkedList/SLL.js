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
      throw new Error("Position out of bounds");
    } else if (position === 0) {
      // If the position is 0, insert the new node at the head
      this.unShift(value);
      // If the list was empty, update the tail to the new node
      if (this.length === 0) {
        this.push(value);
      }
    } else {
      // Create a new node with the given value
      const newNode = new Node(value);

      // Traverse the list to find the node before the insertion point
      let nodeBeforeInsertionPoint = this.get(position - 1);
      let currentNodeInThatPosition = nodeBeforeInsertionPoint.next;
      newNode.next = currentNodeInThatPosition;
      // Insert the new node by updating the next pointers
      nodeBeforeInsertionPoint.next = newNode;

      // If the new node is inserted at the end, update the tail
      if (newNode.next === null) {
        this.tail = newNode;
      }
      // Increment the length of the list
      ++this.length;
    }
    // Return the modified list
    return this;
  }

  deleteAtPosition(position) {
    // Check if the position is out of bounds
    if (position < 0 || position >= this.length) {
      throw new Error("Position out of bounds");
    }

    // If deleting the first node (head)
    if (position === 0) {
      this.head = this.head.next; // Move head to the next node

      // If the list had only one node, update the tail to null
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      // Traverse the list to find the node before the one to be deleted
      let prev = this.head;
      for (let i = 0; i < position - 1; i++) {
        prev = prev.next;
      }

      // Remove the target node by updating the next pointer
      prev.next = prev.next.next;

      // If the deleted node was the last one, update the tail
      if (position === this.length - 1) {
        this.tail = prev;
      }
    }

    // Decrement the length of the list after deletion
    this.length--;

    // Return the modified list
    return this;
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

// sll.unShift("Hello");

sll.push("Hello");
sll.push("Akram");
sll.push("Good Bye");
sll.push("<3");

// console.log("node at index", sll.get(3));

sll.set(1, "Hidhaya");

console.log(JSON.stringify(sll));
