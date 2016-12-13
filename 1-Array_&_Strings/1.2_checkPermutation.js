//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

//solution 1
//sorting
let checkPermutation = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  }
  let sort1 = sortHelper(str1);
  let sort2 = sortHelper(str2);
  for(let i = 0; i < sort1.length; i++) {
    if(sort1[i] !== sort2[i]){
      return false;
    }
  }
  return true;
}

let sortHelper = (str) => {
  return str.split('').sort();
}

//solution 2
//character hash
let checkPermutation = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  }

  let charHash = {};
  for(let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    if(charHash[ch]){
      charHash[ch]++;
    } else {
      charHash[str1[i]] = 1;
    }
  }

  for(let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if(charHash[ch]) {
      --charHash[ch];
    } else {
      return false;
    }
  }
  return true;
}
