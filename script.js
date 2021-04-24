// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays of uppercase alphabets, lowercase alphabets, numbers and special characters
var uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '|'];
//Empty arrays that the password, reserved words and all the four arrays will be added in one array.
var newPassword = [];
var reservedWords = [];
var container = [];

//Creating the random number generator function that grabs a letter depending what is added to the parameter

function randomNumber(array) {
  var index = Math.floor(Math.random() * array.length);
  var store = array[index];
  return store;
}
console.log(randomNumber(uppercaseAlphabets));

function generatePassword() {

  //First prompt that ask you to enter the amount of characters you want for your password
  var passwordLength = prompt('How many characters would you like your password to contain?');

  //If statment that check if the password is greater then or equal to 8 and less then or equal to 128. If it matches the criteria then continue if not then send an alert and it runs the function again. 

  if (passwordLength >= 8 && passwordLength <= 128) {

    //Confrim questions that will come out as true or false
    var uppercaseQuestion = window.confirm('Do you want uppercase characters?');
    var lowercaseQuestion = window.confirm('Do you want lowercase characters?');
    var numberQuestion = window.confirm('Do you want numerical values?');
    var specialCharacterQuestion = window.confirm('Do you want special characters?');

  } else {
    alert('Your password is either less then 8 character or greater then 128 characters please try again.');
    generatePassword();
  }
}
