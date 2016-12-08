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
    this.length = 0;
  }

  addToTail(data){
    let node = new Node(data);

    if(!this.head){
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  removeHead(){
    let node = new Node(data);

    if(this.head){
      let removed = this.head;
      if(removed === this.tail){
        this.tail = null;
      }
      this.head = this.head.next;
      this.length--;
      return removed.data;
    }
  }

  addToHead(data){
    let node = new Node(data);
    if(!this.head){
      this.addToTail(data);
    } else {
      let temp = this.head;
      node.next = temp;
      this.head = node;
    }
    return this.head
  }

  contains(target){
    let currentNode = this.head;
    while(!currentNode){
      if(currentNode.data === target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
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

  removeAt(position){
    if(!this.head || position > this.length || position < 1){
      return false;
    }
    let currentNode = this.head;
    let previous = null;
    let next = currentNode.next;
    while(position - 1 > 0){
      previous = currentNode;
      currentNode = currentNode.next;
      next = currentNode.next;
      position--;
    }
    let deletedNode = currentNode.data;
    previous.next = next;
    this.length--;
    return deletedNode;
  }

  addNodeAt(position, data){
    if(position > this.length || position < 1){
      return false;
    }
    let newNode = new Node(data);
    let currentNode = this.head;
    let previous = null;
    while(position - 1 > 0){
      previous = currentNode;
      currentNode = currentNode.next;
      position--;
    }
    newNode.next = currentNode;
    previous.next = newNode;
  }
}
