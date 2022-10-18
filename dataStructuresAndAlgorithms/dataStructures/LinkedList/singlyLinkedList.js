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
    this.headNode = null
    this.tailNode = null
    this.length = 0
  }

  if (listOfValues instanceof Array) {
    for(const value of listOfValues){
      this.addLast(value)
    }
  }
}

// initiates the currentNode and currentIndex and return as an object
initiateNodeAndIndex () {
  return { currentNode: this.headNode, currenIndex: 0}
}