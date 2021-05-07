//Variable arrays
var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbolCharacters = "!#$%&'";

// Assignment code here
var generatePassword = function () {
  var pooledCharacters = [];
  var passArr = [];
  var passLength = prompt("Chose a password length between 8 and 128 characters");

// Checks if length of password chose meets the requirement 
  if (passLength >= 8 && passLength <= 128) {
    var isLowerCase = confirm("Use lowercase letters?");

    var isUpperCase = confirm("Use uppercase letters?");

    var isSpecialChar = confirm("Use special characters?");

    var isNumberChar = confirm("Use numbers?");
  // Checks if at least 1 character type was selected
    if (isLowerCase || isUpperCase || isSpecialChar || isNumberChar) {
  // Checks if lowercase letters will be included in password - pushes characters to array of potential included characters 
      if (isLowerCase) {
        for (var i = 0; i < lowerCaseAlphabet.length; i++) {
          pooledCharacters.push(lowerCaseAlphabet[i]);
        }
      }
  // Checks if uppercase letters will be included in password - pushes characters to array of potential included characters
      if (isUpperCase) {
        for (var i = 0; i < upperCaseAlphabet.length; i++) {
          pooledCharacters.push(upperCaseAlphabet[i]);
        }
      }
  // Checks if special characters will be included in password - pushes characters to array of potential included characters
      if (isSpecialChar) {
        for (var i = 0; i < symbolCharacters.length; i++) {
          pooledCharacters.push(symbolCharacters[i]);
        }
      }
  // Checks if numbers will be included in password - pushes characters to array of potential included characters
      if (isNumberChar) {
        for (var i = 0; i < numbers.length; i++) {
          pooledCharacters.push(numbers[i]);
        }
      }

      for (var i = 0; i < passLength; i++) {
        passArr.push(pooledCharacters[Math.floor(Math.random() * pooledCharacters.length)]);
      }

      var joinedPass = passArr.join("");

      return joinedPass;
    } else {
      alert("You need to chose at least 1 type of character");
      // Function will stop executing and return to initial prompt
      return generatePassword();  
    }
  } else {
    alert("Incorrect length of characters chosen. Try again.");
    // Function will stop executing and return to initial prompt
    return generatePassword();
  }
};

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
