//  PROBLEM : 8

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//  Note: for this kata y isn't considered a vowel.


//  SULUTION: 1;
const removeVowel = (str) => {
  return str.replace(/[aeiouAEIOU]/g, "");
};
console.log(removeVowel("This website is for losers LOL!"));



// SULUITN : 2
const removeVowel_ = (str) => {
  let rejult = "";
  let vowel = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (!vowel.includes(str[i])) {
      rejult = rejult + str[i];
    }
  }
  return rejult;
};

console.log(removeVowel_("This website is for losers LOL!"));
