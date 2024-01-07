// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let passwordLength="0"
// Function to prompt user for password options
function getPasswordOptions() {

  //prompt for password length between 8 and 128 characters
  passwordLength = parseInt(window.prompt("enter a number between 8 and 128", 67));
  console.log(passwordLength);
  if (passwordLength > 7 && passwordLength < 129) {
    console.log("Thank you your password will be " + passwordLength + " characters long.");
      } else while (passwordLength > 7 !== passwordLength < 129) { //loop until matches the correct password range
   if (passwordLength<8) {
    passwordLength = parseInt(window.prompt("Please enter a number between 8 and 128"));
  }
    else if (passwordLength > 128) {
    passwordLength = parseInt(window.prompt("Password needs to be less than 128 characters long, please enter a number between 8 and 128"));
    //  passwordLength = window.prompt("Please enter a number between 8 and 128");
  } console.log("Thank you your password will be " + passwordLength + " characters long.");
}
  // need to examine NaN issues with above
  //prompt to choose complexity Lowercase, Uppercase, Numeric, Special Characters
  var complexityLower = window.prompt("Password complexity. Do you want the password to contain lowercase letters? Please answer Y for yes and N for no.", "Y");
 
  var complexityUpper = confirm("Password complexity. Do you want the password to contain uppercase letters? Please answer OK for yes and cancel for no.");
  var complexityNum = confirm("Password complexity. Do you want the password to contain numbers? Please answer OK for yes and cancel for no.");
  var complexitySpec = confirm("Password complexity. Do you want the password to contain special characters? Please answer OK for yes and cancel for no.");
  console.log(complexityLower)
  console.log(complexityUpper)
  console.log(complexityNum)
  console.log(complexitySpec)

}
// Function for getting a random element from an array
function getRandom(arr) {
  if (complexityUpper === true) {
    

  }

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);