let availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let playedCells = {};
let winnerDetected = false;
let isRematch = true;
let isBotTurn = false;

document.addEventListener("click", function (event) {
  if (!isBotMode) return;
  if (isBotTurn) return;
  const box = event.target.id;
  const boxId = Number(event.target.id);
  const cell = document.getElementById(box);

  if (positionMap[boxId] && cell.innerText === "") {
    cell.textContent = "X";
    isBotTurn = true;
    cell.style.color = "#FF4FCB";
    playedCells[boxId] = "X";
    availableCells = availableCells.filter((cell) => cell !== boxId);
    document.getElementById("x").style.borderColor = "#6060798e";
    document.getElementById("o").style.borderColor = "#00FFA3";
    checkBotWin();
    if (winnerDetected) return;
    botMove();
    b;
  }

  if (isRematch) {
    document.getElementById("o").style.borderColor = "#6060798e";
    document.getElementById("x").style.borderColor = "#00FFA3";
    isRematch = false;
  }
});

function botMove() {
  setTimeout(() => {
    document.getElementById("o").style.borderColor = "#6060798e";
    document.getElementById("x").style.borderColor = "#00FFA3";
    if (availableCells.length == 0) return;
    let logicalBotMove = decideBotMove();
    const randomBlock = document.getElementById(logicalBotMove);
    randomBlock.innerText = "O";
    randomBlock.style.color = "#FFDC60";
    playedCells[logicalBotMove] = "O";
    availableCells = availableCells.filter((cell) => cell !== logicalBotMove);
    checkBotWin();
    isBotTurn = false;
  }, 600);
}

function checkBotWin() {
  for (combination of winCombinations) {
    if (
      playedCells[combination[0]] === "X" &&
      playedCells[combination[1]] === "X" &&
      playedCells[combination[2]] === "X"
    ) {
      const xWins = document.getElementById("xWins");
      xWins.innerText = parseInt(xWins.innerText) + 1;
      singlePlayerResultPopup("Win");
      winnerDetected = true;
      return;
    } else if (
      playedCells[combination[0]] === "O" &&
      playedCells[combination[1]] === "O" &&
      playedCells[combination[2]] === "O"
    ) {
      const oWins = document.getElementById("oWins");
      oWins.innerText = parseInt(xWins.innerText) + 1;
      setTimeout(() => {
        singlePlayerResultPopup("Loss");
        return;
      }, 600);
      winnerDetected = true;
    }
  }
  if (Object.keys(playedCells).length == 9 && !winnerDetected) {
    const draw = document.getElementById("draw");
    draw.innerText = parseInt(draw.innerText) + 1;
    document.getElementById("x").style.borderColor = "#6a6a9e8e";
    document.getElementById("o").style.borderColor = "#6a6a9e8e";
    document.getElementById("d").style.borderColor = "#00FFA3";
    matchDrawPopup();
  }
}
