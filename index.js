var randomvariable1 = Math.floor(Math.random() * 6) + 1;
var randomvariable2 = Math.floor(Math.random() * 6) + 1;
var random_image1 = "images/dice" + randomvariable1 + ".png";
var random_image2 = "images/dice" + randomvariable2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", random_image1);
document.querySelectorAll("img")[1].setAttribute("src", random_image2);

if (randomvariable1 > randomvariable2) {
  document.querySelector("h1").innerHTML = "🌹Player 1 Wins";
} else if (randomvariable1 < randomvariable2) {
  document.querySelector("h1").innerHTML = "🌹Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
