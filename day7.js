// PROBLEM:  7

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1

// oddishOrEvenish(373) ➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// // 14 % 2 = 0

// Notes
// N/A

// SULUTION : 1
const oddishOrEvenish = (weather) => {
  let sum = 0;
  let weather_split = weather.toString().split("");
  for (let i = 0; i < weather_split.length; i++) {
    sum = sum + Number(weather_split[i]);
  }
  if (sum % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
};
console.log(oddishOrEvenish(123));
console.log(oddishOrEvenish(373));



// SULUTION : 2
const oddishOrEvenish2 = (number) => {
  const digits = number.toString().split("");
  const sum = digits.reduce((total, digit) => total + Number(digit), 0);
  return sum % 2 === 0 ? "Evenish" : "Oddish";
};

console.log(oddishOrEvenish2(123));
console.log(oddishOrEvenish2(373));
