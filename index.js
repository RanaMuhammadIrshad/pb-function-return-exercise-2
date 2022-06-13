// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

console.log(`----01-Method-01----`);
function vowel_count(str) {
  //write your code here

  const count = str.match(/[aeiou]/gi).length;
  return count;
}
console.log(vowel_count("The quick brown fox"));
console.log(vowel_count("JavaScript program"));
console.log(vowel_count(" The quick brown fox and JavaScript program "));

console.log(`----01-Method-02----`);
function vowel_count2(str) {
  //write your code here

  const myStr = str.toLowerCase();
  let VowelList = "aeiou";
  let vCount = 0;

  for (let i = 0; i < myStr.length; i++) {
    if (VowelList.indexOf(myStr[i]) !== -1) {
      vCount++;
    }
  }

  console.log(`I have found ${vCount} vowels`);
}

vowel_count2("The quick brown fox");
vowel_count2("JavaScript program");
vowel_count2(" The quick brown fox and JavaScript program ");

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

console.log(`----03-A----`);
function abc(calledBack) {
  //write your code here
  calledBack();
}

function called() {
  console.log(`abc`);
}

abc(called);

console.log(`----03-B----`);

function receiver(someFunc) {
  someFunc();
}

function secondFunc() {
  console.log("I am coming from secondFunc");
}
receiver (secondFunc);