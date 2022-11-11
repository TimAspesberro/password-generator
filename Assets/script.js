
// Get references to the #generate element
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword)


//Character Option Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCha = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Confirmation Variables
var conLength = "";
var conSpecial;
var conNumeric;
var conUpper;
var conLower;

//Function which determines what is included in password and randomizes it
var generatePassword = function () {
  var conLength = (prompt("How many characters would you like your password to contain? Please choose between 8 up to 128 characters."));
  

//if the user input isnt within the parameters, it will alert them
  while (conLength < 8 || conLength > 128) {
    alert("Your selection needs to be between 8 and 128 characters. Please try again.")
    var conLength = (prompt("How many characters would you like your password to contain? Please choose between 8 up to 128 characters."))
  };

  alert(`Your password will have ${conLength} characters.`);



//Prompts user to accept from the following criteria
  var conSpecial = confirm("Select OK if you would like to have special characters.");
  
  var conNumeric = confirm("Select OK if you would like to have numbers.");

  var conUpper = confirm("Select OK if you would like to have uppercase letters.");

  var conLower = confirm("Select OK if you would like to have lowercase letters.");


  //Checks if at lest one option was selected, if not it will send an alert
  while(conSpecial === false && conNumeric === false && conUpper === false && conLower === false) {
    alert("Please select at least one of the options given.");
    
    var conSpecial = confirm("Select OK if you would like to have special characters.")

    var conNumeric = confirm("Select OK if you would like to have numbers.")  

    var conUpper = confirm("Select OK if you would like to have lowercase letters.")

    var conLower = confirm("Select OK if you would like to have uppercase letters.")
    
  };


  //Combines the selections together and pushes them into an empty array
    var passwordCha = [];

    if (conSpecial) {
      passwordCha = passwordCha.concat(specialCha)
    }
    if (conNumeric) {
      passwordCha = passwordCha.concat(number)
    }
    if (conUpper) {
      passwordCha = passwordCha.concat(alphaUpper)
    }
    if (conLower) {
      passwordCha = passwordCha.concat(alphaLower)
    };


//Randomizes the characters and sends to an empty string
    var randomPassword = "";
      
    for (var i = 0; i < conLength; i++) {
      randomPassword = randomPassword + passwordCha[Math.floor(Math.random() * passwordCha.length)];
    }
    return randomPassword;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


