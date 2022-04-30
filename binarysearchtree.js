class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(node) {
    if (this.root) {
      let curr = this.root;
      while (curr) {
        if (curr.data > node.data) {
          if (curr.left === null) {
            curr.left = node
            break
          } else {
            curr = curr.left
          }
        } else {
          if (curr.right === null) {
            curr.right = node
            break
          } else {
            curr = curr.right
          }
        }
      }
    } else {
      this.root = node
    }
  }

  preOrder(node = this.root) {
    function preOrder(node) {
      if (node === null) return ''
      return `${node.data} ${preOrder(node.left)} ${preOrder(node.right)}`
    }
    return preOrder(node).split(/\s+/).join(' ')
  }
}


function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
