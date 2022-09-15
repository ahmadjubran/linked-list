"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  deleteMiddle() {
    if (!this.head) {
      return null;
    } else {
      let current = this.head;
      let count = 0;
      while (current) {
        current = current.next;
        count++;
      }
      let middle = Math.floor(count / 2);
      current = this.head;
      for (let i = 0; i < middle; i++) {
        current = current.next;
      }
      current.value = current.next.value;
      current.next = current.next.next;
    }
  }

  // Insert into a specific location into the LL
  insertAt(location, value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      for (let i = 0; i < location - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
  }
}

module.exports = LinkedList;
