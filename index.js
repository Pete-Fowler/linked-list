class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let temp = this.head;
    while (temp !== null) {
      temp = temp.next;
    }
    temp.next = value;
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

console.log(list);
