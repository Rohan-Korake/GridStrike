const positionMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentTurn = "X";

document.addEventListener("click", function (event) {
  const clickedCell = event.target.id;
  const cellId = Number(event.target.id);
  let block = document.getElementById(clickedCell);

  if (isBotMode) return;

  if (positionMap[cellId] && block.innerText === "") {
    block.textContent = currentTurn;
    addAnimation(block);
    currentTurn = currentTurn === "X" ? "O" : "X";

    //Game color
    if (currentTurn == "X") {
      block.style.color = "#FFDC60";
    } else {
      block.style.color = "#FF4FCB";
    }

    checkWinner(event);
    if (winnerFound) return;

    //Turn indicator colors
    if (currentTurn == "X" && !isDraw) {
      document.getElementById("o").style.borderColor = "#6060798e";
      document.getElementById("x").style.borderColor = "#00FFA3";
    } else if (currentTurn == "O" && !isDraw) {
      document.getElementById("x").style.borderColor = "#6a6a9e8e";
      document.getElementById("o").style.borderColor = "#00FFA3";
    }
  }
});
