"use strict";

// PROBLEM : 10
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// SULUTION : 1
const fakeBin = (x) => {
  if (x) {
    let splistr = x.split("");
    for (let i = 0; i < splistr.length; i++) {
      if (parseInt(splistr[i]) >= 5) {
        splistr[i] = "1";
      } else {
        splistr[i] = "0";
      }
    }
    return splistr.join("");
  } else {
    return "Please type your input";
  }
};

console.log(fakeBin("4532")); // 0100
console.log(fakeBin("")); //Please type your input
