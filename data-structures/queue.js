class Queue {
  constructor(){
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value){
    this.queue[this.tail++] = value;
  }

  dequeue(){
    if(this.size() > 0) {
      let dequeued = this.queue[this.head];
      this.queue[this.head++] = undefined;
      return dequeued;
    }
    return false;
  }

  size(){
    return this.tail - this.head;
  }
}

export default Queue;
