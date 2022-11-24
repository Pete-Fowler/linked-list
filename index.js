class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(node) {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = node;
  }

  prepend(node) {
    node.next = this.head;
    this.head = node;
  }

  get size() {
    let i = 1;
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
      i++;
    }
    return i;
  }

  get tail() {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  at(index) {
    let temp = this.head;
    let i = 0;
    while (i < index) {
      if (temp.next === null) {
        return null;
      }
      temp = temp.next;
      i++;
    }
    return temp;
  }

  pop() {
    let temp = this.head;
    let newLast;
    while (temp.next !== null) {
      if (temp.next.next === null) {
        newLast = temp;
      }
      temp = temp.next;
    }
    newLast.next = null;
    return temp;
  }

  contains(value) {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const startNode = new Node("first", null);
const list = new LinkedList(startNode);

const anotherNode = new Node("another", null);
list.append(anotherNode);

const prependNode = new Node("prepend", null);
list.prepend(prependNode);

console.log(list, list.contains("prepeffnd"));
