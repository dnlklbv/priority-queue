const Node = require('./node');

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
  }

  push(data, priority) {
    const node = new Node(data, priority);
    this.shiftNodeUp(node);
    this.insertNode(node);
  }

  pop() {
    if (!this.isEmpty()) {
      this.detachRoot();
      this.restoreRootFromLastInsertedNode();
      this.shiftNodeDown();
    }
  }

  detachRoot() {
    this.root = null;
  }

  restoreRootFromLastInsertedNode(detached) {}

  size() {}

  isEmpty() {
    return this.root === null;
  }

  clear() {
    this.root = null;
    this.parentNodes = [];
  }

  insertNode(node) {
    if (this.isEmpty()) {
      this.root = node;
      this.parentNodes.push(node);
    } else {
      this.parentNodes[this.parentNodes.length - 1].appendChild(node);
      this.parentNodes.push(node);
    }
  }

  shiftNodeUp(node) {}

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
