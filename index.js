var randomNumberLeft = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumberLeft + ".png");

var randomNumberRight = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumberRight + ".png");

if (randomNumberLeft > randomNumberRight) {
  document.querySelector("h1").innerHTML = "Player 1 Won!";
} else if (randomNumberLeft < randomNumberRight) {
  document.querySelector("h1").innerHTML = "Player 2 Won!";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw!";
}
