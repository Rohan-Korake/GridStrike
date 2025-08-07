let botChoice;
let botTargetCell = [];
winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function logicalMove(checkSymbol) {
  for (let combination of winCombinations) {
    const [cell1, cell2, cell3] = combination;

    //if place at cell1
    if (
      playedCells[cell2] == checkSymbol &&
      playedCells[cell3] == checkSymbol &&
      !playedCells[cell1] &&
      availableCells.includes(cell1)
    ) {
      botTargetCell.push(cell1);
    }

    //if place at cell2
    if (
      playedCells[cell1] == checkSymbol &&
      playedCells[cell3] == checkSymbol &&
      !playedCells[cell2] &&
      availableCells.includes(cell2)
    ) {
      botTargetCell.push(cell2);
    }

    //if place at cell2
    if (
      playedCells[cell1] == checkSymbol &&
      playedCells[cell2] == checkSymbol &&
      !playedCells[cell3] &&
      availableCells.includes(cell3)
    ) {
      botTargetCell.push(cell3);
    }
  }
}

function decideBotMove() {
  let pickedCell;
  botTargetCell = [];

  logicalMove("X");
  logicalMove("O");
  if (botTargetCell.length > 0) {
    pickedCell =
      botTargetCell[Math.floor(Math.random() * botTargetCell.length)];
    return pickedCell;
  }

  let randomIndex = Math.floor(Math.random() * availableCells.length);
  let randomCell = Number(availableCells[randomIndex]);
  return randomCell;
}
