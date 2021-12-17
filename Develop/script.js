// Assignment Code
//creates variable that targets the generate ID.  The generate id is a button.
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxy"; 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
console.log (lowercase.length);

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
function generatePassword(){ 
//adding a log to let dev know when button is pressed.
console.log ("The button was clicked."); window.prompt ("Use ABCs uppercase?");

//TODO you are going to need to store the password to a variable and return that variable
return ("hello!")
}

// Add event listener to generate button; once the user clicks the button, it will call the writepassword function
generateBtn.addEventListener("click", writePassword);
