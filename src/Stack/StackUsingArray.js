/* Stack follows LIFO Concept Last In First Out */

class StackArray {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
    return this;
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    for (let i = this.items.length - 1; i >= 0; i--) {
      console.log(
        "|",
        this.items[i],
        "|",
        i == this.items.length - 1 ? "--->head" : "",
        i === 0 ? "--->tail" : ""
      );
      console.log(i === 0 ? "-----" : "");
    }
  }
}

const stack = new StackArray();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.print();
console.log("popping.... last item in stack", stack.pop(), "\n");
console.log("=======================\n");
console.log("peeking... head  value in stack ", stack.peek(), "\n");
stack.print();
