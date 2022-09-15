"use strict";

const Node = require("../node.js");

describe("Node Module", () => {
  it("can create a new node", () => {
    let value = "test";
    let node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
