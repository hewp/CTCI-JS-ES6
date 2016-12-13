// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations:"taco cat'; "atco cta'; etc.)

// solution 1

let isPermutationOfPalindrome = (str) => {
  let string = str.toLowerCase();
  let countOdd = 0;
  let charHash = {};
  for(let i = 0; i < string.length; i++){
    let char = string[i];
    if(char === ' ') {
      continue;
    }
    if(charHash[char]) {
      charHash[char]++;
      if(charHash[char] % 2 === 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    } else {
      charHash[char] = 1;
      countOdd++;
    }
  }
  return countOdd <= 1;
}

// solution 2
// bit vector

let createBitVector = (str) => {
  let bitVector = 0;
  for(let i = 0; i < str.length; i++) {
    let 
  }
}

let isPermutationOfPalindrome = (str) => {
  let string = str.toLowerCase();
  let bitVector =
}
