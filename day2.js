// Problem : 2
// Create a function which returns the number of true values there are in an array.

// Example :
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const countTrueValues = (array) => {
    let trueCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === true) {
        trueCount++;
      }
    }
    return trueCount;
  };
  
  console.log(countTrueValues([false, false, true, false])); // 1
  console.log(countTrueValues([false, false, true, true])); // 2
  console.log(countTrueValues([true, false, true, false])); // 2
  console.log(countTrueValues([])); // 0
  
