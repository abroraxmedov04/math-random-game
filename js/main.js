"use strict";
const correctSound = document.querySelector(".correct-sound");
const incorrectSound = document.querySelector(".incorrect-sound");
const checkBtn = document.querySelector(".check");
const input = document.querySelector(".guess");
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const number = Math.trunc(Math.random() * 20) + 1;
const againBtn = document.querySelector(".again");
const highScore = document.querySelector(".highscore");
console.log(number);
let highScoreCounter = 0;

let score = 20;

checkBtn.addEventListener("click", (e) => {
  let inputValue = Number(input.value);
  console.log(inputValue);

  if (!inputValue) {
    message.textContent = `🚩 No number here!`;
  } else if (inputValue == number) {
    message.textContent = `🚀 Correct Number!`;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = number;
    correctSound.play();
    highScore.textContent = score;

    if (score > highScoreCounter) {
      highScoreCounter = score;
      highScore.textContent = highScoreCounter;
    }
  } else if (inputValue !== number) {
    if (score > 1) {
      message.textContent =
        number > inputValue ? `📈 Too high number!` : `📉 Too low number!`;
      incorrectSound.play();
      document.body.style.backgroundColor = "#fe0000";
      setTimeout(() => {
        document.body.style.backgroundColor = "#222";
      }, 2000);
      score--;
      scoreElement.textContent = score;
    } else {
      message.textContent = `🚧 You lost the game!`;
      scoreElement.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", (e) => {
  location.reload();
  document.body.style.backgroundColor = "#222";
});
