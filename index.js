
const squares = document.querySelectorAll('.board > div');
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
      document.getElementById("current-player").innerHTML = currentPlayer + " is up next.";
    }
  });
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

  
  document.getElementById("current-player").innerHTML = currentPlayer.value + " goes first!";
}
