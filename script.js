const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const resultContainer = document.querySelector(".result");
const hScore = document.querySelector(".humanScore");
const cScore = document.querySelector(".computerScore");
let hChoice = document.querySelector(".humanChoice");
let cChoice = document.querySelector(".computerChoice");
let resetBtn = document.querySelector(".reset");
let gameCountContainer = document.getElementById("game-count");

let arr = ["rock", "paper", "scissor"];

let currentBtn, playerChoice, computerChoice;

let str;
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let winner;

rock.addEventListener("click", () => {
  playerChoice = "rock";
  findWinner(playerChoice);
});

paper.addEventListener("click", () => {
  playerChoice = "paper";
  findWinner(playerChoice);
});

scissor.addEventListener("click", () => {
  playerChoice = "scissor";
  findWinner(playerChoice);
});

resetBtn.addEventListener("click", reset);

function findWinner(playerChoice) {
  gameCount++;
  let random = Math.floor(Math.random() * arr.length);
  computerChoice = arr[random];

  if (playerChoice == computerChoice) {
    str = "Draw";
    resultContainer.style.color = "blue";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissor") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissor" && computerChoice == "paper")
  ) {
    str = `You won`;
    playerScore++;
    resultContainer.style.color = "green";
  } else {
    str = `You lost`;
    resultContainer.style.color = "red";
    computerScore++;
  }
  render();
}

function render() {
  resultContainer.textContent = str;
  hScore.textContent = playerScore;
  cScore.textContent = computerScore;
  cChoice.textContent = computerChoice;
  hChoice.textContent = playerChoice;
  cChoice.classList.add("choiceShow");
  hChoice.classList.add("choiceShow");
  gameCountContainer.textContent = gameCount;
}

function reset() {
  resultContainer.style.color = "black";
  playerScore = 0;
  computerScore = 0;
  gameCount = 0;
  str = "Start Game";
  render();
}
