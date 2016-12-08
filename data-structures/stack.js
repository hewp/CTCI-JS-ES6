class Stack {
  constructor(){
    this.stack = [];
    this.count = 0;
  }

  push(value){
    this.stack[this.count++] = value;
  }

  pop(){
    if(this.count > 0) {
      let popped = this.stack[--this.count];
      this.stack[this.count] = undefined;
      return popped;
    }
  }

  size(){
    return this.count;
  }

}

export default Stack;
