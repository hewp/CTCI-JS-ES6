// String Rotation: Assume you have a method isSubst ring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

let isStrRotation = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  }
  let str3 = str1 + str1;
  for(let i = 0; i < str1.length; i++) {
    if(str3.substr(i, str2.length) === str2) {
      return true;
    }
  }
  return false;
}
