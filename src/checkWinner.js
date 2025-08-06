let winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let clickedCells = {};
let moveCount = 0;
let winnerFound = false;
let isDraw = false;

function checkWinner(event) {
  const cellId = event.target.id;
  const cellValue = event.target.innerText;
  clickedCells[cellId] = cellValue;

  for (let combination of winCombinations) {
    if (
      clickedCells[combination[0]] === "X" &&
      clickedCells[combination[1]] === "X" &&
      clickedCells[combination[2]] === "X"
    ) {
      const xWins = document.getElementById("xWins");
      xWins.innerText = parseInt(xWins.innerText) + 1;
      winnerFound = true;
      showWinnerPopup("X");
      break;
    } else if (
      clickedCells[combination[0]] === "O" &&
      clickedCells[combination[1]] === "O" &&
      clickedCells[combination[2]] === "O"
    ) {
      const oWins = document.getElementById("oWins");
      oWins.innerText = parseInt(oWins.innerText) + 1;
      winnerFound = true;
      showWinnerPopup("O");
      break;
    }
  }

  if (Object.keys(clickedCells).length === 9 && !winnerFound) {
    const draw = document.getElementById("draw");
    draw.innerText = parseInt(draw.innerText) + 1;
    const x = document.getElementById("x");
    const o = document.getElementById("o");
    const d = document.getElementById("d");
    x.style.borderColor = "#6a6a9e8e";
    o.style.borderColor = "#6a6a9e8e";
    d.style.borderColor = "#00FFA3";
    isDraw = true;
    matchDrawPopup();
  }
  return;
}
