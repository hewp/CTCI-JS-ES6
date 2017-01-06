// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addToTail(data){
    let node = new Node(data);

    if(!this.head){
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

// simple linked list implementation, will switch to modules later

let list = new List();

// with a buffer
let removeDup = (list) => {
  let hash = {};
  let previous = null;
  let current = list.head;
  while(current !== null) {
    if(hash[current.data]) {
      previous.next = current.next;
    } else {
      hash[current.data] = true;
      previous = current;
    }
    current = current.next;
  }
  list.tail = previous;
  return list;
}

// without a buffer
let removeDup = (list) => {
  let current = list.head;
  let runner = current;
  while(current !== null) {
    runner = current;
    while(runner.next !== null) {
      if(runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  list.tail = runner;
  return list;
}

// list.addToTail(1);
// list.addToTail(2);
// list.addToTail(4);
// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(1);
//
// removeDup(list);
