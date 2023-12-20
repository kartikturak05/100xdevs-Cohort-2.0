/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.replace(/[^a-zA-Z]/g, '');
  str = str.toLowerCase();
  let original = str;
  original = original.split('').reverse().join('');
  if(str.toLowerCase() === original.toLowerCase())
  {
    return true;
  }
  else{
    return false;
  } 
}

module.exports = isPalindrome;
