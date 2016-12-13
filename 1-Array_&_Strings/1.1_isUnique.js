//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
//assume ASCII characters

//part 1
let isUnique = (string) => {
  if(string.length > 128) {
    return false;
  }
  let hash = {};
  for(let i = 0; i < string.length; i++) {
    if(!hash[string[i]]) {
      hash[string[i]] = true;
    } else {
      return false;
    }
  }
  return true;
}

// w/ bit vector

let isUnique = (string) => {
  let checker = 0;
  for(let i = 0; i < string.length; i++){
    let val = string.charCodeAt(i) - 'a'.charCodeAt(0);
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= (1 << val);
  }
  return true;
}

//part 2: no data structure

// O(n^2) time

let isUnique = (string) => {
  if(string.length > 128) {
    return false;
  }
  for(let i = 0; i < string.length; i++) {
    for(let j = i + 1; j < string.length; j++) {
      if(string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}
