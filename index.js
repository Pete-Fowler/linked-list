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

console.log(list, list.tail);
