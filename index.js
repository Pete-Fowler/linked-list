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

  find(value) {
    let temp = this.head;
    let i = 0;
    if (temp.value === value) {
      return i;
    }
    while (temp.next !== null) {
      temp = temp.next;
      i++;
      if (temp.value === value) {
        return i;
      }
    }
    return null;
  }

  toString() {
    let temp = this.head;
    let string = `( ${this.head.value} )`;
    while (temp.next !== null) {
      temp = temp.next;
      string += ` -> ( ${temp.value} )`;
    }
    return string + " -> null";
  }

  insertAt(value, index) {}

  removeAt(index) {}
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const startNode = new Node("2", null);
const list = new LinkedList(startNode);

const anotherNode = new Node("3", null);
list.append(anotherNode);

const node4 = new Node("4", null);
list.append(node4);

const prependNode = new Node("1", null);
list.prepend(prependNode);

console.log(list, list.toString());
