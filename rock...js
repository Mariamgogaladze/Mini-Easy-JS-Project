
const compChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

const choices = ["rock", "scissors", "paper"];

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userChoice.innerHTML = e.target.id;

  const randomIndex = Math.floor(Math.random() * choices.length);
  compChoice.innerHTML = choices[randomIndex];

  if (userChoice.innerHTML === compChoice.innerHTML) {
    result.innerHTML = "You Win!";
  } else {
    result.innerHTML = "You lost :(";
  }
}));
