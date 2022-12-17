// Assignment code here
// var arrays
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var Special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// if user doesn't choose a number between 8 and 128 then it prompts with pick between these two
function validateCharsLength (numOfCharacters) {
  if (numOfCharacters < 8 || numOfCharacters > 128) {
    confirm("Enter a number of characters between 8 and 128");
    return generatePassword();
  } 
  return numOfCharacters;
}
// prompts for user to choose the variables of their password
function generatePassword() {
  var characterArray = [];
  var numOfCharacters = prompt("How many characters would you like your password to be?");
  validateCharsLength(numOfCharacters);
  var inclLower = confirm("Do you want to use lower case letters?");
  var inclUpper = confirm("Do you want to use upper case letters?");
  var inclNumbers = confirm("Do you want to use numbers?");
  var inclSpecial = confirm("Do you want to use special characters?");
  
  function validateSomeCharsIncl () {
    if (!inclUpper && !inclLower && !inclNumbers && !inclSpecial) {
      confirm("Error! Please select at least one character type.");
      return generatePassword();
    } 
    }
  validateSomeCharsIncl();

  
  if (inclLower) {
    characterArray = characterArray.concat(Lower);
  }
  if (inclUpper) {
    characterArray = characterArray.concat(Upper);
  }
  if (inclNumbers) {
    characterArray = characterArray.concat(Numbers);
  }
  if (inclSpecial) {
    characterArray = characterArray.concat(Special);
  }

  var suggestedPassword = "";

  for (var i =0; i < parseInt(numOfCharacters); i++) {
    var randomIndex = Math.floor(Math.random()*characterArray.length);
    suggestedPassword += characterArray[randomIndex];
  }
  return suggestedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);