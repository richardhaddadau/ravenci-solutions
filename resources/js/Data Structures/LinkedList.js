class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  increaseSize(increment = 1) {
    this.length += increment;
  }

  decreaseSize(decrement = 1) {
    this.length -= decrement;
  }

  isValid(data) {
    const validTypes = ["string", "number", "boolean"];

    if (typeof data === "object") {
      return Array.isArray(data) ? "array" : undefined;
    }

    return validTypes.includes(typeof data) ? typeof data : undefined;
  }

  addFirst(data) {
    // if (this.isValid(data) === "array" && data.length > 0) {
    //   const tempList = new LinkedList();
    //   tempList.head = data[0];
    //   tempList.tail = data[data.length - 1];
    //   tempList.tail.next = tempList.head;
    //   tempList.length = data.length;
    //
    //   for (let i = 1; i < data.length; i++) {
    //
    //   }
    // } else if (this.isValid(data)) {
    //   const newNode = new Node(data);
    // } else {
    //   return undefined;
    // }

    if (!this.isValid(data)) return undefined;

    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //
      // BEFORE ADDING
      // to tail <-- [HEAD] --> [prev | DATA | next] --> [TAIL] --> back to head
      //
      // AFTER ADDING
      // to tail <-- [NEW NODE - NEW HEAD] --> [OLD HEAD] --> [prev | DATA | next] --> [TAIL] --> back to head
      //

      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    }

    this.increaseSize();
  }

  addLast(data) {
    if (!this.isValid(data)) return undefined;

    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //
      // BEFORE ADDING
      // to tail <-- [HEAD] --> [prev | DATA | next] --> [TAIL] --> back to head
      //
      // AFTER ADDING
      // to tail --> [HEAD] --> [prev | DATA | next] --> [OLD TAIL] --> [NEW NODE - NEW TAIL] --> back to head
      //

      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.increaseSize();
  }

  addAt(data, index) {
    if (!this.isValid(data)) return undefined;

    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //
      // BEFORE ADDING
      // to tail <-- [HEAD] --> [prev | DATA | next] --> [TAIL] --> back to head
      //
      // AFTER ADDING
      // to tail --> [HEAD] --> [prev | DATA | next] --> [NEW NODE] --> [TAIL] --> back to head
      //

      if (index === 0) return this.addFirst(data);
      if (index === this.length) return this.addLast(data);

      let counter = 0;
      let currentNode = this.head;
      let previousNode = this.head;

      while (counter !== index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        counter++;
      }

      newNode.prev = previousNode;
      newNode.next = currentNode;
      currentNode.prev = newNode;
      previousNode.next = newNode;
    }

    this.increaseSize();
  }

  removeFirst() {
    if (!this.head) return undefined;

    const removedNode = this.head;
    this.head = this.head.next;
    this.tail.next = this.head;
    this.head.prev = this.tail;

    this.decreaseSize();

    return removedNode;
  }

  removeLast() {
    if (!this.tail) return undefined;

    const removedNode = this.tail;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }

    this.decreaseSize();

    return removedNode;
  }

  removeAt(index) {
    if (!this.head) return undefined;

    const toRemove = this.getAt(index);
    const toRemovePrev = toRemove.prev;
    const toRemoveNext = toRemove.next;

    toRemoveNext.prev = toRemovePrev;
    toRemovePrev.next = toRemoveNext;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  getAt(index) {
    if (!this.getFirst()) return null;

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  forEach(callback) {
    let currentNode = this.head;

    while (currentNode) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  toArray() {
    const array = [];

    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}
