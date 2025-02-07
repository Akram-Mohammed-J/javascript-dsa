class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.duplicateDetected = false; // Track duplicates
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) {
        console.warn(`Duplicate value ignored: ${value}`);
        this.duplicateDetected = true; // Flag duplicate
        return this;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  search(value) {
    if (this.root === null) return undefined;
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return current; // Found the value
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined; // Value not found
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return true; // Found the value
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false; // Value not found
  }
  /*
  cleaner code approach.
  
  contains(value) {
  let current = this.root;

  while (current) {
    if (value === current.value) return true;
    current = value < current.value ? current.left : current.right;
  }

  return false;
} 
  */
}

const myBst = new BST();
myBst.insert(30);
myBst.insert(29);
myBst.insert(31);
myBst.insert(40);
myBst.insert(41);
myBst.insert(89);
myBst.insert(39);
myBst.insert(39); // This will be ignored
console.log("search:", JSON.stringify(myBst.search(30)));

export { BST, myBst };
