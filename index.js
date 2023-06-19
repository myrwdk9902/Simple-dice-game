//random number generation for first dice
var randomNumber1 = Math.floor((Math.random() * 6) + 1); // random number generation

var randomDiceImagerSrc1 = "images/dice" + randomNumber1 + ".png"; // replacing img source

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImagerSrc1 ) // manupulation of dice image source

//random number generation for second dice
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImagerSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImagerSrc2);

//Results Based on Conditions

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins";
    
} 
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins🚩"
}
else {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩"
}

