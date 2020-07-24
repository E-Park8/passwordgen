// Assignment Code
var generateBtn = document.querySelector("#generate");
// let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
// let numbers = '1234567890'
// let special = '+-&!(){}[]^~*?:'

  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let special = ['+', '-', '&','!' , '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']


function generatePassword() {

  // This variable/array is to add the entire array of possible letters/numbers/characters if user confirms
  let passwordOption = []

  // This array 
  let passIndex = []


  // This will be the password, but it is returned as an array
  let password = []

  let length = prompt('How many characters would you like your password to be? Between 8-128 characters')

  if (length < 8 || length > 128) {
    return 'Error: Please choose a value between 8 and 128.'
  }

  // Ask users if they want certain types of characters included in their password and saves their true/false into a variable 
  let upperChoice = confirm('Do you want any uppercase characters?')
  let lowerChoice = confirm('Do you want any lowercase characters?')
  let numChoice = confirm('Do you want any numeric values?')
  let specialChoice = confirm('Do you want any special characters?')
  
  // if user confirms, our empty array named passwordOption will have the entire list of upper letters. the push is adding a random  
  if (upperChoice) {
    passwordOption = passwordOption.concat(upperCase)
    passIndex.push(upperCase[Math.floor(Math.random() * upperCase.length)])

  }

  if (lowerChoice) {
    passwordOption = passwordOption.concat(lowerCase)
    passIndex.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
  }

  if (numChoice) {
    passwordOption = passwordOption.concat(numbers)
    passIndex.push(numbers[Math.floor(Math.random() * numbers.length)])
  }
  
  if (specialChoice) {
  passwordOption = passwordOption.concat(special)
  passIndex.push(special[Math.floor(Math.random() * special.length)])
  }

  if (passIndex.length === 0) {
    return 'Error: please confirm for at least one option'
  }

  for (let i = 0; i < length; i++) {
    password.push(passwordOption[Math.floor(Math.random() * passwordOption.length)])
  }

  // for (let i = 0; i < passIndex.length; i++) {
  //   password[i] = passIndex[i]
  // }

   return password.join('') 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
