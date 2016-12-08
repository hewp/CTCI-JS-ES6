class Node {
  constructor(data){
    this.data = data;
    this.prev = null;
    this.next = null
  }
}

class doublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(data){
    let node = new Node(data);
    if(!this.length){
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  searchNodeAt(position){
    if(position > this.length || position < 1){
      return false;
    }
    let currentNode = this.head
    for(let i = 0; i < position - 1; i++){
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  removeHead(){
    if(this.head){
      let removed = this.head;
      if(!removed.next){
        this.tail = null;
        this.head = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
    this.length--;
    return removed.value;
  }

  removeTail(){
    if(this.tail){
      let removed = this.tail;
      if(!removed.prev){
        this.tail = null;
        this.head = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null
      }
    }
    this.length--;
    return removed.value;
  }

  removeAt(position){
    if(!this.length || position > this.length || position < 1){
      return false;
    }
    if(position === 1){
      this.removeHead();
      return;
    }
    if(position === this.length) {
      this.removeTail();
      return;
    }
    let currentNode = this.head;
    let next = currentNode.next;
    while(position - 1 > 0) {
      currentNode = currentNode.next;
      position--;
    }
    let deletedNode = currentNode;
    currentNode.next.prev = currentNode.prev;
    currentNode.prev.next = currentNode.next;
    this.length--;
    return deletedNode;
  }
}
