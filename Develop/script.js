// Assignment Code
//creates variable that targets the generate ID.  The generate id is a button.
var generateBtn = document.querySelector("#generate");
var lowercasetext = "abcdefghijklmnopqrstuvwxy";
var uppercasetext = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerictext = "0123456789";
var punctuationtext = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var generatedPassword = "";

// if condition syntax (ELSE IF IS FOR MORE THAN 1 CONDITION)
// if(condition1) {
//   do some code
// } else if (condition2) {
//   do other code
// } else {
//   if all else fails...last resort
// }

// var color = 'green'
// if(color === 'red') {
//   console.log('RED MEANS STOP')
// } else if (color === 'yellow') {
//   console.log('YELLOW MEANS CAUTION')
// } else {
//   console.log('I AM NOT WORTHY')
// }

function generatePassword() {
  console.log("the button was clicked!");
  var passwordLength = window.prompt("Password length (min 8 - max 128)?", "8-128");
  // the prompt called lowercase is going to return whatever the input is (text); else "cancel" will stop stuff.
  if (passwordLength === null) {
    return;
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmLowercase = window.confirm("Use Lowercase ABC's?");
    var confirmUppercase = window.confirm("Use Uppercase ABC's?");
    var confirmNumbers = window.confirm("Use Numbers (0-9)?");
    var confirmSpecial = window.confirm("Use special characters?");
    if (confirmLowercase === true, confirmUppercase === true, confirmNumbers === true, confirmSpecial === true) {
      for (var index = 0; index < passwordLength; index++) {
        generatedPassword += lowercasetext.charAt(Math.floor(Math.random() * lowercasetext.length))
      } return generatedPassword;
    }
  }
}




// //function makeid() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 5; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }

// console.log(makeid());

// Write password to the #password input
// this is the writepassword function - the script states locally that the variable password is equal to the generate password function, and the variable passwordtext is equal to the password ID. 

function writePassword() {
  //we are calling the below generate password function and "storing the value of that function in the variable named password"; 

  var password = generatePassword();

  //This selects the ID "password"
  var passwordText = document.querySelector("#password");

  // this takes the value of the generated password and plugs it in to what is displayed on the screen
  passwordText.value = password;

}

//TODO : MAKE GENERATEPASSWORD FUNCTION. The button needs to: define what is Not allowed through validation and create a password if entries are valid; Entries are valid if at least 1 character type is selected - if not, there will be an error and it starts over (so there will be a loop)
//the function will need to have 4 character libraries (reference OWASP for special characters, upper case, lower case, numbers), prompts the user to select which libraries to use (must be at least 1, be min 8 and max 128 characters; 
//function generatePassword(){ 
// //adding a log to let dev know when button is pressed.
// console.log ("The button was clicked."); 
//   // window.prompt ("Password length (min 8 - max 128)?"); 
//   window.prompt ("Use ABCs uppercase (Y/N)?"); 
//   window.prompt ("Use ABCs lowercase (Y/N)?");
//   window.prompt ("Use numbers 0-9 (Y/N)?");
//   window.prompt ("Use special characters (Y/N)?");

//TODO you are going to need to store the password to a variable and return that variable
// return ("hello!")
// }

// Add event listener to generate button; once the user clicks the button, it will call the writepassword function
generateBtn.addEventListener("click", writePassword);

// generatePassword();
