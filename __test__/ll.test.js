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
    expect(list.head.value).toEqual("test");
    expect(list.head.next).toBeNull();
  });

  it("can insert multiple nodes to the beginning of the linked list", () => {
    let list = new LinkedList();
    list.insert("test");
    list.insert("test2");
    expect(list.head.value).toEqual("test2");
    expect(list.head.next.value).toEqual("test");
    expect(list.head.next.next).toBeNull();
  });
});

describe("Append to the end of the linked list", () => {
  it("can append a new node to the end of the linked list", () => {
    let list = new LinkedList();
    list.append("test");
    expect(list.head.value).toEqual("test");
    expect(list.head.next).toBeNull();
  });

  it("can append multiple nodes to the end of the linked list", () => {
    let list = new LinkedList();
    list.append("test");
    list.append("test2");
    expect(list.head.value).toEqual("test");
    expect(list.head.next.value).toEqual("test2");
    expect(list.head.next.next).toBeNull();
  });
});

describe("Delete the middle node of the linked list", () => {
  it("can delete the middle node of the linked list", () => {
    let list = new LinkedList();
    list.append("test");
    list.append("test2");
    list.append("test3");
    list.append("test4");
    list.append("test5");
    list.deleteMiddle();
    expect(list.head.value).toEqual("test");
    expect(list.head.next.value).toEqual("test2");
    expect(list.head.next.next.value).toEqual("test4");
    expect(list.head.next.next.next.value).toEqual("test5");
    expect(list.head.next.next.next.next).toBeNull();
  });

  it("can delete the middle node of the linked list", () => {
    let list = new LinkedList();
    list.append("test");
    list.append("test2");
    list.append("test3");
    list.append("test4");
    list.deleteMiddle();
    expect(list.head.value).toEqual("test");
    expect(list.head.next.value).toEqual("test2");
    expect(list.head.next.next.value).toEqual("test4");
    expect(list.head.next.next.next).toBeNull();
  });
});
