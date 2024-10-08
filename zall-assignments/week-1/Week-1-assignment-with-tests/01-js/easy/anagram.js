/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(str1, str2) {

  let tempStr = "";

  for (let i = str1.length - 1; i >= 0; i--) {
    tempStr += str1[i];
  }
  if (tempStr === str2) {
    return true;
  }
  return false;

}

module.exports = isAnagram;
