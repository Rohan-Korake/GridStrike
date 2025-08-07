const winnerRematch = document.getElementById("winnerRematch");
winnerRematch.addEventListener("click", function () {
  prepareNewGame();
});

const winnerMenu = document.getElementById("winnerMenu");
winnerMenu.addEventListener("click", function () {
  MenuProcess();
});

const drawRematch = document.getElementById("drawRematch");
drawRematch.addEventListener("click", function () {
  botModeSetup();
  prepareNewGame();
});

const drawMenu = document.getElementById("drawMenu");
drawMenu.addEventListener("click", function () {
  MenuProcess();
});

const botModeRematch = document.getElementById("botModeRematch");
botModeRematch.addEventListener("click", function () {
  botModeSetup();
  prepareNewGame();
});

const botModeMenu = document.getElementById("botModeMenu");
botModeMenu.addEventListener("click", function () {
  MenuProcess();
});

const defeatRematch = document.getElementById("defeatRematch");
defeatRematch.addEventListener("click", function () {
  botModeSetup();
  prepareNewGame();
});

const defeatMenu = document.getElementById("defeatMenu");
defeatMenu.addEventListener("click", function () {
  botModeSetup();
  MenuProcess();
});

function prepareNewGame() {
  hidePopup();
  currentTurn = currentTurn === "X" ? "O" : "X";

  //Menu game tracking variables and flags
  clickedCells = {};
  moveCount = 0;
  winnerFound = false;
  isDraw = false;

  //clear board for next match
  for (let cell = 1; cell < positionMap.length; cell++) {
    document.getElementById(cell).innerText = "";
  }

  //Turn indicator colors
  const xTurn = document.getElementById("x");
  const oTurn = document.getElementById("o");
  const drawMatch = document.getElementById("d");

  drawMatch.style.borderColor = "#6a6a9e8e";

  if (currentTurn == "X") {
    oTurn.style.borderColor = "#6a6a9e8e";
    xTurn.style.borderColor = "#00FFA3";
  } else if (currentTurn == "O") {
    xTurn.style.borderColor = "#6a6a9e8e";
    oTurn.style.borderColor = "#00FFA3";
  }
}

function MenuProcess() {
  botModeSetup();
  prepareNewGame();
  displayStartScreen();

  //Menu scoreboard
  const xWins = (document.getElementById("xWins").innerText = 0);
  const draw = (document.getElementById("draw").innerText = 0);
  const oWins = (document.getElementById("oWins").innerText = 0);
}

function botModeSetup() {
  winnerDetected = false;
  isRematch = true;
  playedCells = {};
  isBotTurn = false;
  availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
