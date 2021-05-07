var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbolCharacters = "!#$%&'";

// Assignment code here
var generatePassword = function () {
  var pooledCharacters = [];
  var passArr = [];
  var passLength = prompt("Chose a password length between 8 and 128 characters");

  if (passLength >= 8 && passLength <= 128) {
    var isLowerCase = confirm("Use lower case letters?");

    var isUpperCase = confirm("Use upper case letters?");

    var isSpecialChar = confirm("Use special characters?");

    var isNumberChar = confirm("Use numbers?");

    if (isLowerCase || isUpperCase || isSpecialChar || isNumberChar) {
      if (isLowerCase) {
        for (var i = 0; i < lowerCaseAlphabet.length; i++) {
          pooledCharacters.push(lowerCaseAlphabet[i]);
        }
      }

      if (isUpperCase) {
        for (var i = 0; i < upperCaseAlphabet.length; i++) {
          pooledCharacters.push(upperCaseAlphabet[i]);
        }
      }

      if (isSpecialChar) {
        for (var i = 0; i < symbolCharacters.length; i++) {
          pooledCharacters.push(symbolCharacters[i]);
        }
      }

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

      return generatePassword();
    }
  } else {
    alert("Incorrect length of characters chosen. Try again.");

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
