// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

console.log(`----01----`);
function vowel_count(str1) {
  //write your code here

  const count = str1.match(/[aeiou]/gi).length;
  return count;
}
console.log(vowel_count("The quick brown fox"));
console.log(vowel_count("JavaScript program"));
console.log(vowel_count(" The quick brown fox and JavaScript program "));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.

console.log(`----02----`);
function makeid(l) {
  //write your code here

  let myText = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < l; i++) {
    myText += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return myText;
}
console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.

console.log(`----03----`);
function abc(calledBack) {
  //write your code here
  calledBack();
}

function called() {
  console.log(`abc`);
}

abc(called);
