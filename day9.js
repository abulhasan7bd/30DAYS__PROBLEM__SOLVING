"use stritc";

// PROBLEM : 9

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// SULUTION : 1
const getCount = (str) => {
  let check = "aeiou";
  let count = 0;
  let strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (check.includes(strSplit[i])) {
      count++;
    }
  }
  return count;
};
console.log(getCount("aeiou")); // 5
console.log(getCount("abulhasan")); // 4



// SULUTON : 2
const getCount2 = (str) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
};
console.log(getCount2("abul")); //2
