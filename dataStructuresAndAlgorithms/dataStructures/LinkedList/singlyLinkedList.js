// A single linked list is similat to an array but it has some 
// significant difference which makes it an effective data structure in
// some circumstances. One of the major differences is that it does not
// have defined indexed and navigation through the list is through nodes.
// Singly linked lists also have no predefined sizes like arrays in the
// initialization face and they grow and reduce based on the size of the
// list.

// List manipulation methods include:
// size, head, addLast(push), addFirst(unShift), addAt(insert), removeFirst(shift), 
// remove(pop), removeAt, indexOf, isEmpty, elementAt, findMiddle, get, clean, rotateListRight

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor (listOfValues) {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  
  if (listOfValues instanceof Array) {
    for(const value of listOfValues){
      this.addLast(value)
    }
  }
}

// initiates the currentNode and currentIndex and return as an object
  initiateNodeAndIndex() {
    return { currentNode: this.headNode, currentIndex: 0}
  }

  size () {
    return this.length;
  }

  head() {
    return this.headNode?.data || null;
  }

  tail() {
    return this.tailNode?.data || null;
  }

  isEmpty() {
    return this.length === 0;
  }

  addFirst(element) {
    const node = new Node(element)

    if(this.headNode === null) {
      this.tailNode = node;
    }

    node.next = this.headNode;
    this.headNode = node;
    this.length++;
    return this.size();
  }

  // Remove the first item from the list(shift)
  removeFirst() {
    if(this.headNode === null) {
      return this.size();
    }
    const removedNode = this.headNode;
    this.headNode = removedNode.next;
    this.length--;
    
    if(this.isEmpty){
      this.tailNode = null;
    }
    return removedNode?.data;
  }

  removeLast() {
    if(this.isEmpty) return null;
    if(this.length === 1) return this.removeFirst();
    const removedNode = this.tailNode;
    let { currentNode } = this.initiateNodeAndIndex();
    while (currentNode.next.next) {
      currentNode = currentNode.next
    }
    currentNode.next = null;
    this.tailNode = currentNode;
    this.length--;
    return removedNode.data;
  }
}

