// A palindrome is a word, sentence or other type of character sequence which reads the
// same chackward as forward. For example, "racecar" and "Anna" are palindromes.

const palindrome = (word) => {
 const pal = word.toLowerCase();

 return pal.split('').reverse().join('') === pal ? true : false;
}
