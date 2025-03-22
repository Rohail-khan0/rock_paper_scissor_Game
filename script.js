let userScore = 0;
let compScore = 0;

let userScoring = document.querySelector("#user-score");
let compScoring = document.querySelector("#comp-score");

//PLAY YOUR MOVE MSG
const message = document.querySelector("#msg");

//Choice div select k liye
const choices = document.querySelectorAll(".choice");

//GENERATE COMPUTER CHOICE
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randNum = Math.floor(Math.random() * 3);
  return options[randNum];
};


//DRAW GAME
const drawGame = () => {
  message.innerText = "Game is Draw!";
  message.style.backgroundColor = "##0009abd2";
};

//SHOW WINNER
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScoring.innerText = userScore;

    message.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoring.innerText = compScore;
    message.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};

//PLAY GAME METHOD
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

//USER CHOICE
choices.forEach((choice) => {             // ye choice div select krny k liye
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // issy id track hogi rock,paper,scisscor

    playGame(userChoice);
  });
});
