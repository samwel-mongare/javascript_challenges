// A word is an anagram of another word if both use the same letters in the
//  same quantity, but arranged differently.

//  You can state this challenge in the following terms: write a function that 
//  checks if two provided strings are anagrams of each other; letter casing shouldn’t matter.

//  The first thing to notice is that you’ll need to compare each letter in the two input strings, 
//  not only in terms of which letters they are but also how many of each letter there are in both strings.
 
//  A suitable data structure to hold the anagram data would be a JavaScript object literal: the key is the letter character and the value is the number of times that letter is contained in the given string.

// Next, pay attention to these edge cases:

// make sure letter casing isn’t factored into the comparison; just transform both strings into either lower case or upper case
// leave everything that isn’t a character out of the comparison; a good option would be to use a regular expression.

// helper function that builds the object to store the data

const buildCharObject = str => {
  const charObj = {};
  for(let char of str.replace(/[^\w]/g).toLowerCase()) {
    // if the object has already a key value pair equal to the 
    // value being looped over, increase the value by 1, otherwise add
    // the letter being looped over as key and 1 as its value
    charObj[char] = charObj[char] + 1 || 1
  }
  return charObj
}

// main function
const anagram = (strA, strB) => {
  // build the object that holds strA data
  const aCharObject = buildCharObject(strA);
  // build the object that holds strB data
  const bCharObject = buildCharObject(strB);

  // compare the number of keys in the two objects because anagrams should have the same
  // number of letters.
  if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false;
  }

  // if both objects have the same number of keys we can be sure that at least both
  // strings have the same number of letters. Now we can compare the two objects to see if both
  // have the same letters in the same amount.
  for (let char in aCharObject) {
    if(aCharObject[char] !== bCharObject[char]) {
      return false;
    }
  }
  // if both the above checks succeed you have an anagram: return true.
  return true;
}
