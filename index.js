function isPalindrome(word) {
  // Write your algorithm here

  const reversed = word.split('').reverse().join('')
  if(word === reversed){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here

  write a function that takes a word.

    Break apart the word, reverse the letters and join it back.
    Use an if statement to find out if the new reversed word 
    striclty matches the original word.

    return the results whether true or false.
*/

/*
  Add written explanation of your solution here
  I started by declaring a variable that will contain the reversed letters
  of the word.
  I then used an if statement to compare the original word to the reversed
  one.
  If it matched, true was returned otherwise false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
