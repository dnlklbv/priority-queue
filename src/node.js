/* eslint-disable prefer-destructuring */

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  appendChild(node) {
    if (!this.left) {
      this.left = node;
      this.left.parent = this;
    } else if (!this.right) {
      this.right = node;
      this.right.parent = this;
    }
  }

  removeChild(node) {
    if (this.left === node) {
      this.left.parent = null;
      this.left = null;
    } else if (this.right === node) {
      this.right.parent = null;
      this.right = null;
    } else {
      throw new Error();
    }
  }

  remove() {
    if (this.parent) this.parent.removeChild(this);
  }

  swapWithParent() {
    if (this.parent) {
      const parent = this.parent;
      const grandPerent = this.parent.parent;

      if (grandPerent) {
        parent.remove();
        grandPerent.appendChild(this); // set child instead of its parent
        this.appendChild(parent); // set parent as child of the child
      }
    }
  }
}

module.exports = Node;
