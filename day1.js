// PROBLEM : We have given an input string and the task is to reverse the input string in JavaScript. The reverse() and join() method can be used to reverse the given string. and these method does not alter the original string.

// Examples

// Input : "world"
// Output: "dlrow"

// Input : "word"
// Output: "drow"

// SULUTION : 1
function reverseString1(str) {
  let rejult = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rejult += str[i];
  }
  return rejult;
}

// SULUTION : 2
function reverseString2(str) {
  let str__array = str.split("").reverse();
  return str__array.join("");
}

console.log("Solution 1 :", reverseString1("world"));
console.log("Solution 2 :", reverseString2("word"));
