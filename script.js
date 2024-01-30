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
var pCharacters=(upperCasedCharacters+lowerCasedCharacters+specialCharacters+numericCharacters)
// Array of names of arrays
var complexArr = [
'complexityUpper', 'complexityLower', 'complexityNum', 'complexitySpec'
];

let passwordLength="0";
let complexityUpper="0";
let complexityLower="0";
let complexityNum="0";
let complexitySpec="0";

// Function to prompt user for password options
function getPasswordOptions(pCharacters) {

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
  console.log('Password containing Lowercase letters? ' + complexityLower)
  console.log('Uppercase letters? ' + complexityUpper)
  console.log('Numbers? ' + complexityNum)
  console.log('Special Characters? ' + complexitySpec)
  pCharacters='';
  if (complexityLower = "Y") {
    pCharacters = (pCharacters+lowerCasedCharacters);
  } else {} // else do nthing and move on doesn't work
  if (complexityUpper = true) {
    pCharacters = (pCharacters+upperCasedCharacters);
  } else if (complexityUpper = false) {} // else do nthing and move on doesn't work
  if (complexityNum=true) {
    pCharacters=(pCharacters+numericCharacters);
  } else if (complexityNum=false) {} // else do nthing and move on doesn't work
  if (complexitySpec=true) {
    pCharacters=(pCharacters+specialCharacters)
  } else if (complexitySpec){} // else do nthing and move on doesn't work
  console.log=(pCharacters)
  return (pCharacters, passwordLength)
}
// Function for getting a random element from an array
function getRandom(complexArr) {
complexityLower=true;
complexityNum=true;
complexitySpec=true;
complexityUpper=true;
 //testing complexityUpper=true //scope error?
/*  console.log("complexityUpper = " + complexityUpper)
  console.log(upperCasedCharacters[9])
  console.log(upperCasedCharacters[(parseInt(Math.random() * upperCasedCharacters.length))]);
  console.log(parseInt(Math.random() * 26))
  console.log(upperCasedCharacters.length) */
 //testing if (complexityUpper === true) {
 // testing   console.log(upperCasedCharacters[(parseInt(Math.random() * upperCasedCharacters.length))]);
    // add randomising array process
    console.log(complexArr[3]);
 if ((complexArr[(parseInt(Math.random() * complexArr.length))]) === true) { //randomises the array password element is extracted from 
  console.log(complexArr);
 }
}



// Function to generate password with user input
function generatePassword() {
  //Generate random password
  //var pCharacters = ['f', 'D', 'r', 'Z', 'X'];
  password='';
  {
    for (let i=0; i < 15; i++) {
      const randomindex = Math.floor(Math.random() * pCharacters.length);
      password += pCharacters[randomindex];
      }
    console.log(password)
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);