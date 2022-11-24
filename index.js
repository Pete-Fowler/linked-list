import LinkedList from "./LinkedList.js";
import Node from "./Node.js";

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
