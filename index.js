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

  insertAt(node, index) {
    if (index === 0) {
      this.prepend(node);
      return;
    }
    let temp = this.head;
    let i = 0;
    while (i < index - 1) {
      temp = temp.next;
      i++;
    }
    const previousNode = temp;
    const nextNode = temp.next;
    previousNode.next = node;
    node.next = nextNode;
  }

  removeAt(index) {
    let temp = this.head;
    let i = 0;
    while (i < index - 1) {
      temp = temp.next;
      i++;
    }
    const previousNode = temp;
    const next = temp.next.next;
    previousNode.next = next;
  }
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

const node5 = new Node("5", null);

list.insertAt(node5, 1);

list.removeAt(1);

console.log(list);
