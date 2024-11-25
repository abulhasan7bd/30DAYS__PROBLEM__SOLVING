// Problem : 4

// Write a function that takes three arguments: an array, a value to find, and a value to replace it with. The function should search for all occurrences of the specified value in the array and replace each one with the provided replacement value.

// Example :
// input: [1, 2, 3, 1] Output: [3, 2, 3, 3]

// SULUTION : 1
const replaceArrayValues = (array, valueToFind, valueToReplace) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valueToFind) {
        array[i] = valueToReplace; 
      }
    }
    return array; 
  };
  
  let array = [1, 2, 3, 4, 1];
  let valueToFind = 1;
  let valueToReplace = 5;
  const updatedArray = replaceArrayValues(array, valueToFind, valueToReplace);
  console.log(updatedArray); // Output: [5, 2, 3, 4, 5]
  
