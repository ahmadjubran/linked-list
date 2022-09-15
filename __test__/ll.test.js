"use strict";

const LinkedList = require("../ll");

describe("Linked List Module", () => {
  it("can create a new linked list", () => {
    let list = new LinkedList();
    expect(list).toBeDefined();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
  });
});

describe("Insert to the beginning of the linked list", () => {
  it("can insert a new node to the beginning of the linked list", () => {
    let list = new LinkedList();
    list.insert("test");
    list.insert("test2");
    expect(list.head.value).toEqual("test2");
    expect(list.head.next.value).toEqual("test");
    expect(list.head.next.next).toBeNull();
  });
});
