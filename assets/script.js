// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector('#password');
var listOfChara = ''
var charaVari = ''

const specialCharacters = "!@#$%^&*()";
const lowerCase = "abcdefghijklmnopqrsyuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  Function to create password
function writePassword() {
//  Variables to store the response of the user.
  const specialCharCf = confirm('Would you like the password to contain special characters?');
  const lowerCf = confirm('Would you like the password to contain lower case characters?');
  const upperCf = confirm('Would you like the password to contain upper case characters?');
  const digits = confirm('Would you like the passwordf to contain numbers?');
  var passwordLength = prompt('Please select the length of the password, must be at least 8 characters but no more than 128 characters');
  //  Used logical OR operator to make sure the input was within parameters.
  //  Function to check if an acceptable length was given.
  // Used the while loop to make sure the proper length is given before moving on.
  while (passwordLength < 8 || passwordLength > 128) {
    // Alert message if the condition isn't met.
    alert('Please make sure the length is within given parameters.');
    var passwordLength = prompt('Please select the length of the password, must be at least 8 characters but no more than 128 characters');
  }

  
  if (specialCharCf === false && lowerCf === false && upperCf === false && digits === false) {
    alert("Please select at least one character type.");
  }

  if (specialCharCf) {
    listOfChara = listOfChara.concat(specialCharacters);
  }

  if (lowerCf) {
    listOfChara = listOfChara.concat(lowerCase);
  }

  if (upperCf) {
    listOfChara = listOfChara.concat(upperCase);
  }

  if (digits) {
    listOfChara = listOfChara.concat(numbers);
  }

  
  for (var i = 0; i < passwordLength; i++) {
    charaVari += listOfChara.charAt(Math.floor(Math.random() * listOfChara.length));
  }
  password.value = charaVari;

};