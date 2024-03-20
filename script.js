var passwordOptions = null; // Initialize variable for password options

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var generateBtn = document.querySelector('#generate');

function getPasswordOptions() {
  var passwordLength = parseInt(window.prompt("Enter a number between 8 and 128", 67));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(window.prompt("Please enter a valid number between 8 and 128"));
  }

  var complexityLower = confirm("Password complexity. Do you want the password to contain lowercase letters? Please answer OK for yes and cancel for no.");
  var complexityUpper = confirm("Password complexity. Do you want the password to contain uppercase letters? Please answer OK for yes and cancel for no.");
  var complexityNum = confirm("Password complexity. Do you want the password to contain numbers? Please answer OK for yes and cancel for no.");
  var complexitySpec = confirm("Password complexity. Do you want the password to contain special characters? Please answer OK for yes and cancel for no.");

  console.log('Password containing Lowercase letters? ' + complexityLower)
  console.log('Uppercase letters? ' + complexityUpper)
  console.log('Numbers? ' + complexityNum)
  console.log('Special Characters? ' + complexitySpec)

  var pCharacters = [];
  if (complexityLower) pCharacters = pCharacters.concat(lowerCasedCharacters);
  if (complexityUpper) pCharacters = pCharacters.concat(upperCasedCharacters);
  if (complexityNum) pCharacters = pCharacters.concat(numericCharacters);
  if (complexitySpec) pCharacters = pCharacters.concat(specialCharacters);

  return { pCharacters: pCharacters, passwordLength: passwordLength };
}

function generatePassword() {
  var options = getPasswordOptions();
  var pCharacters = options.pCharacters;
  var passwordLength = options.passwordLength;

  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomindex = Math.floor(Math.random() * pCharacters.length);
    password += pCharacters[randomindex];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
