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

  remove(element) {
    if(this.isEmpty) return null;
    let { currentNode } = this.initiateNodeAndIndex();
    let removedNode = null;
    if(currentNode.data === element) {
      return this.removeFirst()
    }
    if(this.tailNode.data === element) {
      return this.removeLast();
    }

    while(currentNode.next) {
      if(currentNode.next.data === element) {
        const removedNode = currentNode.next;
        currentNode.next = removedNode.next;
        this.length--;
        return removedNode.data;
      }
      currentNode = currentNode.next;
    }
    return removedNode?.data || null;
  }

  indexOf(element) {
    if(this.isEmpty) return -1;
    if(this.headNode.data === element) return 0;
    if(this.tailNode.data === element) return this.length -1;
    const { currentIndex, currentNode } = this.initiateNodeAndIndex();
    while(currentNode.next) {
      if(currentNode.data === element) return currentIndex;
      currentNode = currentNode.next;
      currentIndex++;
    }
    return -1;
  }

  elementAt(index) {
    if(this.isEmpty) return null;
    if(index >= this.length || index < 0) {
      throw new RangeError("out of Range index");
    }
    let { currentNode, currentIndex } = this.initiateNodeAndIndex();
    while(currentNode.next) {
      if(currentIndex === index) return currentNode.data;
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  addAt(element, index) {
    if(index >= this.length || index < 0) {
      throw new RangeError("out of Range index");
    }
    if(index === 0) {
      this.addFirst(element);
    }
    if(index === this.length) {
      this.addLast(element);
    }
    const node = new Node(element);
    let { currentIndex, currentNode } = this.initiateNodeAndIndex();
    while(currentIndex !== index - 1) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    
    let nextNode = currentNode.next;
    currentNode.next = node;
    node.next = nextNode;
    this.length++;
    return this.size();
  }

  removeAt(index) {
    if(index >= this.length || index < 0) {
      throw new RangeError("out of Range index");
    }
    if(index === 0) {
      this.removeFirst();
    }
    if(index === this.length - 1) {
      this.removeLast();
    }

    let { currentIndex, currentNode } = this.initiateNodeAndIndex();
    while(currentIndex !== index -1) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    const removedNode = currentNode.next;
    currentNode.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode.data;
  }

  findMiddle() {
    if(this.isEmpty) return null;
    const middleIndex = Math.floor(this.length/2);
    return this.elementAt(middleIndex);
  }
}
