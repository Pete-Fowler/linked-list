class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    console.log(temp);
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

const anotherNode = new Node("another", null);

list.append(anotherNode);

console.log(list);
