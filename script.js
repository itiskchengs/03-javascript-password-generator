// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = '';
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Creating the random number generator function that grabs a letter depending what is added to the parameter

function randomNumber(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
  //return store;
}

function generatePassword() {

  //Arrays of uppercase alphabets, lowercase alphabets, numbers and special characters
  var uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ['!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '|'];
  //Empty arrays that the password, reserved words and all the four arrays will be added in one array.
  var newPassword = [];
  var reservedWords = [];
  var container = [];

  //First prompt that ask you to enter the amount of characters you want for your password
  var passwordLength = prompt('How many characters would you like your password to contain?');

  //If statment that check if the password is greater then or equal to 8 and less then or equal to 128. If it matches the criteria then continue if not then send an alert and it runs the function again. 

  if (passwordLength >= 8 && passwordLength <= 128) {

    //Confrim questions that will come out as true or false
    var uppercaseQuestion = window.confirm('Do you want uppercase characters?');
    var lowercaseQuestion = window.confirm('Do you want lowercase characters?');
    var numberQuestion = window.confirm('Do you want numerical values?');
    var specialCharacterQuestion = window.confirm('Do you want special characters?');

    //If statment logic to check the users choices that they selected and give the selected output depending on there answers to the promt and confrims

    if (uppercaseQuestion && lowercaseQuestion && numberQuestion && specialCharacterQuestion) {

      //Set up the variables that are running the random number generator using the arrays as the argument.
      var randomUpperChar = randomNumber(uppercaseAlphabets);
      var randomLowerChar = randomNumber(lowercaseAlphabets);
      var randomNumChar = randomNumber(numbers);
      var randomSpecialCharacter = randomNumber(specialCharacters);

      //Pushing a single character of each of the uppercase alphabet, lowercase alpabet, numbers and special characters.
      reservedWords.push(randomUpperChar, randomLowerChar, randomNumChar, randomSpecialCharacter);

      //The empty container array will now house all the arrays into one giant array using the concat array method
      container = container.concat(uppercaseAlphabets, lowercaseAlphabets, numbers, specialCharacters);

      //For loop that will run until the number is less then or equal to the password length given by the user form the prompt

      for (var i = 0; i <= passwordLength - 5; i++) {
        //Set a variable that runs the random number function on the container whcih has all the arrays combined
        var allFour = randomNumber(container);
        //Push into the variable newPassword which is an empty array
        newPassword.push(allFour);
        console.log(newPassword);
      }
      //Merge the two arrays newPassword and reservedWords and create a new combined array
      newPassword = newPassword.concat(reservedWords);
      //Take out the quotes and create a string
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;


    } else if (uppercaseQuestion && !lowercaseQuestion && numberQuestion && specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomUpperCharOne = randomNumber(uppercaseAlphabets);
      var randomNumCharOne = randomNumber(numbers);
      var randomSpecialCharacterOne = randomNumber(specialCharacters);

      reservedWords.push(randomUpperCharOne, randomNumCharOne, randomSpecialCharacterOne);

      container = container.concat(uppercaseAlphabets, numbers, specialCharacters);

      for (var i = 0; i <= passwordLength - 4; i++) {
        var threeUpper = randomNumber(container);
        newPassword.push(threeUpper);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (!uppercaseQuestion && lowercaseQuestion && numberQuestion && specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomLowerCharTwo = randomNumber(lowercaseAlphabets);
      var randomNumCharTwo = randomNumber(numbers);
      var randomSpecialCharacterTwo = randomNumber(specialCharacters);

      reservedWords.push(randomLowerCharTwo, randomNumCharTwo, randomSpecialCharacterTwo);

      container = container.concat(lowercaseAlphabets, numbers, specialCharacters);

      for (var i = 0; i <= passwordLength - 4; i++) {
        var threeLower = randomNumber(container);
        newPassword.push(threeLower);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (uppercaseQuestion && lowercaseQuestion && numberQuestion && !specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomUpperCharTwo = randomNumber(uppercaseAlphabets);
      var randomLowerCharThree = randomNumber(lowercaseAlphabets);
      var randomNumCharThree = randomNumber(numbers);

      reservedWords.push(randomUpperCharTwo, randomLowerCharThree, randomNumCharThree);

      container = container.concat(uppercaseAlphabets, lowercaseAlphabets, numbers);

      for (var i = 0; i <= passwordLength - 4; i++) {
        var threeUpperandLowerNum = randomNumber(container);
        newPassword.push(threeUpperandLowerNum);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (uppercaseQuestion && lowercaseQuestion && !numberQuestion && specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomUpperCharThree = randomNumber(uppercaseAlphabets);
      var randomLowerCharFour = randomNumber(lowercaseAlphabets);
      var randomSpecialCharacterThree = randomNumber(specialCharacters);

      reservedWords.push(randomUpperCharThree, randomLowerCharFour, randomSpecialCharacterThree);

      container = container.concat(uppercaseAlphabets, lowercaseAlphabets, specialCharacters);

      for (var i = 0; i <= passwordLength - 4; i++) {
        var threeUpperandLowerSpecial = randomNumber(container);
        newPassword.push(threeUpperandLowerSpecial);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (uppercaseQuestion && lowercaseQuestion && !numberQuestion && !specialCharacterQuestion) {
      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomUpperCharFour = randomNumber(uppercaseAlphabets);
      var randomLowerCharFive = randomNumber(lowercaseAlphabets);

      reservedWords.push(randomUpperCharFour, randomLowerCharFive);

      container = container.concat(uppercaseAlphabets, lowercaseAlphabets);

      for (var i = 0; i <= passwordLength - 3; i++) {
        var twoUpperAndLower = randomNumber(container);
        newPassword.push(twoUpperAndLower);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (uppercaseQuestion && !lowercaseQuestion && numberQuestion && !specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomUpperCharFive = randomNumber(uppercaseAlphabets);
      var randomNumCharFour = randomNumber(numbers);

      reservedWords.push(randomUpperCharFive, randomNumCharFour);

      container = container.concat(uppercaseAlphabets, numbers);

      for (var i = 0; i <= passwordLength - 3; i++) {
        var twoUpperAndNumber = randomNumber(container);
        newPassword.push(twoUpperAndNumber);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (uppercaseQuestion && !lowercaseQuestion && !numberQuestion && specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomUpperCharSix = randomNumber(uppercaseAlphabets);
      var randomSpecialCharacterFour = randomNumber(specialCharacters);

      reservedWords.push(randomUpperCharSix, randomSpecialCharacterFour);

      container = container.concat(uppercaseAlphabets, specialCharacters);

      for (var i = 0; i <= passwordLength - 3; i++) {
        var twoUpperAndSpecial = randomNumber(container);
        newPassword.push(twoUpperAndSpecial);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (!uppercaseQuestion && lowercaseQuestion && numberQuestion && !specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomLowerCharSix = randomNumber(lowercaseAlphabets);
      var randomNumCharFive = randomNumber(numbers);

      reservedWords.push(randomLowerCharSix, randomNumCharFive);

      container = container.concat(lowercaseAlphabets, numbers);

      for (var i = 0; i <= passwordLength - 3; i++) {
        var twoLowerAndNumber = randomNumber(container);
        newPassword.push(twoLowerAndNumber);
        console.log(newPassword)
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (!uppercaseQuestion && lowercaseQuestion && !numberQuestion && specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomLowerCharSeven = randomNumber(lowercaseAlphabets);
      var randomSpecialCharacterFive = randomNumber(specialCharacters);

      reservedWords.push(randomLowerCharSeven, randomSpecialCharacterFive);

      container = container.concat(lowercaseAlphabets, specialCharacters);

      for (var i = 0; i <= passwordLength - 3; i++) {
        var twoLowerAndSpecial = randomNumber(container);
        newPassword.push(twoLowerAndSpecial);
        console.log(newPassword);
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (!uppercaseQuestion && !lowercaseQuestion && numberQuestion && specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomNumCharSix = randomNumber(numbers);
      var randomSpecialCharacterSix = randomNumber(specialCharacters);

      reservedWords.push(randomNumCharSix, randomSpecialCharacterSix);

      container = container.concat(numbers, specialCharacters);

      for (var i = 0; i <= passwordLength - 3; i++) {
        var twoNumberAndSpecial = randomNumber(container);
        newPassword.push(twoNumberAndSpecial);
        console.log(newPassword);
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (uppercaseQuestion && !lowercaseQuestion && !numberQuestion && !specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomUpperCharSeven = randomNumber(uppercaseAlphabets);

      reservedWords.push(randomUpperCharSeven);

      container = container.concat(uppercaseAlphabets);

      for (var i = 0; i <= passwordLength - 2; i++) {
        var oneUpper = randomNumber(container);
        newPassword.push(oneUpper);
        console.log(newPassword);
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (!uppercaseQuestion && lowercaseQuestion && !numberQuestion && !specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomLowerCharEight = randomNumber(lowercaseAlphabets);

      reservedWords.push(randomLowerCharEight);

      container = container.concat(lowercaseAlphabets);

      for (var i = 0; i <= passwordLength - 2; i++) {
        var oneLower = randomNumber(container);
        newPassword.push(oneLower);
        console.log(newPassword);
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (!uppercaseQuestion && !lowercaseQuestion && numberQuestion && !specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomNumCharSeven = randomNumber(numbers);

      reservedWords.push(randomNumCharSeven);

      container = container.concat(numbers);

      for (var i = 0; i <= passwordLength - 2; i++) {
        var oneNumber = randomNumber(container);
        newPassword.push(oneNumber);
        console.log(newPassword);
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

    } else if (!uppercaseQuestion && !lowercaseQuestion && !numberQuestion && specialCharacterQuestion) {

      //Logic is the same as the above if statment but just revised to meet the requirements
      var randomSpecialCharacterSeven = randomNumber(specialCharacters);

      reservedWords.push(randomSpecialCharacterSeven);

      container = container.concat(specialCharacters);

      for (var i = 0; i <= passwordLength - 2; i++) {
        var oneSpecial = randomNumber(container);
        newPassword.push(oneSpecial);
        console.log(newPassword);
      }
      newPassword = newPassword.concat(reservedWords);
      newPassword = newPassword.join('');
      console.log(newPassword);
      return newPassword;

      //Else when the user clicks no to all confrims
    } else {
      alert('You need to at least select one option for the password criteria. Please try again');
    }
  } else {
    alert('Your password is either less then 8 character or greater then 128 characters please try again.');
  }
}
