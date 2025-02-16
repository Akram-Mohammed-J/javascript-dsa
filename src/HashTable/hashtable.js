class HashTable {
  constructor(size = 211) {
    this.table = new Array(size);
  }

  hashStringToInt(str, tableSize) {
    let hash = 17;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % tableSize; // Prime multiplier (31)
    }
    return hash;
  }

  set(key, value) {
    const idx = this.hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      this.table[idx] = [];
    }

    // Check if key already exists and update
    const existingPair = this.table[idx].find((pair) => pair[0] === key);
    if (existingPair) {
      existingPair[1] = value;
    } else {
      this.table[idx].push([key, value]);
    }
  }

  get(key) {
    const idx = this.hashStringToInt(key, this.table.length);
    if (!this.table[idx]) return undefined;

    const pair = this.table[idx].find((pair) => pair[0] === key);
    return pair ? pair[1] : undefined;
  }

  delete(key) {
    const idx = this.hashStringToInt(key, this.table.length);
    if (!this.table[idx]) return false;

    const pairIndex = this.table[idx].findIndex((pair) => pair[0] === key);
    if (pairIndex !== -1) {
      this.table[idx].splice(pairIndex, 1);
      return true;
    }
    return false;
  }
}

// Usage Example
const myTable = new HashTable();
myTable.set("firstName", "Akram");
myTable.set("lastName", "Mohammed");
myTable.set("dob", "12/05/1999");

console.log(myTable.get("dob")); // "12/05/1999"
console.log(myTable.get("firstName")); // "Akram"
console.log(myTable.get("lastName")); // "Mohammed"

myTable.delete("dob");
console.log(myTable.get("dob")); // undefined
