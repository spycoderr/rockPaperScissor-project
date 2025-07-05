
let playerMove;
let result = '';
let score = localStorage.getItem("score");
if (score === null) {
  score = 0;
} else {
  score = parseInt(score);
}

document.getElementById("scoreDisplay").textContent = `Score : ${score}`;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

rockBtn.addEventListener("click", function () {
  playerMove = "rock";
  playGame();
})

paperBtn.addEventListener("click", function () {
  playerMove = "paper";
  playGame();
})

scissorBtn.addEventListener("click", function () {
  playerMove = "scissor";
  playGame();
})

const moveList = ["rock", "scissor", "paper"]

const moveResultMapping = {
  "rock": {
    "paper": -1,
    "scissor": 1,
  },
  "scissor": {
    "rock": -1,
    "paper": 1,
  },
  "paper": {
    "rock": 1,
    "scissor": -1,
  }
}

function getResult(move1, move2) {
  if(move1 === move2)
    return 0;

  return moveResultMapping[move1][move2];
}

function playGame() {

  console.log(playerMove);

  let computerMove = '';
  const number = Math.floor(Math.random() * 3);  // 0, 1, 2
  // console.log(number);
  
  computerMove = moveList[number];

  console.log(computerMove);

  document.getElementById("resultDisplay").textContent =
    `You picked: ${playerMove.toUpperCase()} | Computer picked: ${computerMove.toUpperCase()}`;

  result = getResult(playerMove, computerMove);

  score += result;

  // if (playerMove === "rock") {
  //   if (computerMove === "paper") {
  //     console.log("you lose");
  //     result = "lost";
  //   }
  //   else if (computerMove === "scissor") {
  //     console.log("you win");
  //     result = "win";
  //   }
  //   else {
  //     console.log("tie");
  //     result = "tie";
  //   }
  // }

  // if (playerMove === "paper") {
  //   if (computerMove === "scissor") {
  //     console.log("You lose");
  //     result = "lost";
  //   } else if (computerMove === "rock") {
  //     console.log("You win");
  //     result = "win";
  //   } else {
  //     console.log("Tie");
  //     result = "tie";
  //   }
  // }

  // if (playerMove === "scissor") {
  //   if (computerMove === "rock") {
  //     console.log("You lose");
  //     result = "lost";
  //   } else if (computerMove === "paper") {
  //     console.log("You win");
  //     result = "win";
  //   } else {
  //     console.log("Tie");
  //     result = "tie";
  //   }
  // }

  // if (result === "win") {
  //   score++;
  // }
  // else if (result === "lost") {
  //   score--;
  // }

  // console.log(score);
  localStorage.setItem("score", score);
  document.getElementById("scoreDisplay").textContent = `Score : ${score}`;

}


