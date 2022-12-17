// Assignment code here
 function generateNewPassword() {
    var passwordLength;

  //password requirement between 8-128 chars, not getting this alert when i put in numbers like 4 or 129
    while(true){
      passwordLength = prompt("Choose the length of your password between 8 and 128 characters.");
      passwordLength = parseInt(passwordLength);
      if (passwordLength >= 8 || passwordLength <= 128){
        break;
    } else {
        alert("Must choose a number between 8 and 128.")
        generateNewPassword();
      }
    }

  //using ok and cancel as yes or no, returns true or false depending on users choice
    var lowerCase = confirm("Use lower case letters.");
    var upperCase = confirm("Use upper case letters.");
    var numbers = confirm("Use numbers, 0-9.");
    var specialChar = confirm("Use special characters");

    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var nums = '0123456789';
    var special = '!@#$%^&*()-:;_=+,./<>?{}|\\';

  //if the user doesnt choose any of the character options then they are reminded and have to start over
    if (!lowerCase && !upperCase && !numbers && !specialChar){
      alert('Must choose at least 1 character type to use.')
      generateNewPassword()
    }

    var randomChars = [];

  // so this is if a user checked that they want a type of character then it wil go into the random array
    if (lowerCase){
      randomChars = randomChars.concat(lower.split(''));
    }
    if (upperCase){
      randomChars = randomChars.concat(upper.split(''));
    }
    if (numbers){
      randomChars = randomChars.concat(nums.split(''));
    }
    if (specialChar){
      randomChars = randomChars.concat(special.split(''));
    }

    var password = '';

  //random password generator will take the password length as the limiting size
  for (var i = 0; i <= passwordLength; i++){
    password += randomChars[Math.floor(Math.random() * randomChars.length)];
  }
// bada bing bada bam you have a password
  return password

}

// Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input, i changed the password to generateNewPassword because that is what I called it above
  function writePassword() {
    var password = generateNewPassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);