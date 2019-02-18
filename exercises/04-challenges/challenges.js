/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @param  {string}
 *  @return {string}
 *
 *  @example confirmEnding("Bastian", "n") true
 *  @example confirmEnding("Connor", "n")  false
 *
 */

var confirmEnding = (str, target) => {
  str = str.split("");
  var i = str.length - 1;
  if (str[i] === target) {
    return true;
  } else {
    return false;
  }
};

/**
 *  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 *  @param  {string}
 *  @return {string}
 *
 *  @example repeatStringNumTimes("*", 3)
 *  @example repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *  @example repeatStringNumTimes("abc", -2) should return ""
 */

var repeatStringNumTimes = (str, num) => {
  if (num >= 0) {
    return str.repeat(num);
  } else {
    return "";
  }
};

/**
 *  Find the Longest Word in a String
 *  @param {string}
 *  @return {string}
 *
 *  @example findLongestWordLength("Google do a barrel roll")  should return 6
 *  @example findLongestWordLength("May the force be with you") should return 5
 *
 */

var findLongestWordLength = str => {
  var array = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < array.length; i++) {
    var y = array[i].length;
    if (longestWord < y) {
      longestWord = y;
    }
  }
  return longestWord;
};

module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};
