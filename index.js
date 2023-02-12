const squares = document.querySelectorAll(".board > div");
let currentPlayer = "X";

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (squares[i].textContent === "") {
      squares[i].textContent = currentPlayer;
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      document.getElementById("current-player").innerHTML =
        currentPlayer + " is up next.";
      checkForWinner();
    }
  });
}

function checkForWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].textContent === squares[b].textContent &&
      squares[b].textContent === squares[c].textContent &&
      squares[a].textContent !== ""
    ) {
      document.getElementById("current-player").innerHTML =
        squares[a].textContent + " is the winner!";
    }
  }
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
});

player1Input.addEventListener("input", function () {
  currentPlayer = player1Input.value;
});

player2Input.addEventListener("input", function () {
  if (currentPlayer === player1Input.value) {
    currentPlayer = player2Input.value;
  }
});

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    currentPlayer = player1;
  } else {
    currentPlayer = player2;
  }

  document.getElementById("current-player").innerHTML =
    currentPlayer.value + " goes first!";
}

function checkForDraw() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
      return false;
    } else {
      return true; 
    }
  }
  document.getElementById("its-a-draw").innerHTML = "It's a draw!";
  return true;
}
