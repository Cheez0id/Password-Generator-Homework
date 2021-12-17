// Assignment Code
//creates variable that targets the generate ID.  The generate id is a button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// this is the writepassword function - the script states locally that the variable password is equal to the generate password function, and the variable passwordtext is equal to the password ID. 

function writePassword() {
  //we are calling the below generate password function and "storing the value of that function in the variable named password"; 
  //TODO : MAKE GENERATEPASSWORD FUNCTION.
  var password = generatePassword();

  //This selects the ID "password"
  var passwordText = document.querySelector("#password");

// this takes the value of the generated password and plugs it in to what is displayed on the screen
  passwordText.value = password;

}


function generatePassword(){ 

}

// Add event listener to generate button; once the user clicks the button, it will call the writepassword function
generateBtn.addEventListener("click", writePassword);
