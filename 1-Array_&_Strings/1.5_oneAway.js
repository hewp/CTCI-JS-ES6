// One Away: There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, pIe -> true
// pales. pale -> true
// pale. bale -> true
// pale. bake -> false

let oneAway = (str1, str2) => {
  if(str1.length === str2.length) {
    return replaceChar(str1, str2);
  }
  return insertOrRemoveChar(str1, str2);
}

let insertOrRemoveChar = (str1, str2) => {
  let short = str1.length < str2.length ? str1 : str2;
  let long = str1.length < str2.length ? str2 : str1;
  let indexShort = 0;
  let indexLong = 0;
  while (indexShort < short.length && indexLong < long.length) {
    if(short[indexShort] !== long[indexLong]) {
      if(indexShort !== indexLong) {
        return false;
      }
      indexLong++;
    }
    indexShort++;
    indexLong++;
  }
  return true;
}

let replaceChar = (str1, str2) => {
  let replaced = false;
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] === str2[i]) {
      continue;
    } else {
      if(replaced) {
        return false;
      }
      replaced = true;
    }
  }
  return replaced;
}
