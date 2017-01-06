// String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string,
//  your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

let stringCompress = (str) => {
  if (!str.length) {
    return null;
  }
  let result = '';
  let hash = {};

  for(let i = 0; i < str.length; i++) {
    if(!hash[str[i]]) {
      hash[str[i]] = 1;
    } else {
      hash[str[i]]++;
    }
  }
  for(let ch in hash) {
    result += ch + hash[ch];
  }

  return result;
}
