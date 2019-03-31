//Generate a random number and store it in a variable for later
//Prompt user to guess a letter on the keyboard
//check to see if the letter is correct
//update score with coresponding action
//prompt user to pick a letter on keyboard


//create a variable for all the letters on the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"] 
console.log(alphabet);

var computerChoices = alphabet[Math.floor(Math.random() * 26)+1];
console.log(computerChoices);

var userChoice;

//variable to number of wins, losses, guesses left, and letters guessed. Starts at 0
var myArray = []
var wins = 0;
var losses = 0;
//Max Number of atempts
var guessesLeft = 10;
var guessedLetters;

//References to the the place in the HTML where we wnat to display the wins, losses, etc
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");


//function for when the user presses a key
function myFunction(userChoice) {
    
    myArray.push(userChoice);
    document.getElementById("letters").innerHTML = myArray;

}

document.onkeyup = function(event) {
  var userChoice = event.key;

  if (userChoice !== computerChoices){
      guessesLeft--;
      myFunction(userChoice);

  } 
  else {
      wins++;
      


  }

  if (guessesLeft == 0){
      losses++;
  }

//Display the user choices, wins, losses and guesses left
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  guessesSoFarText = "You chose: " + userChoice;

}


