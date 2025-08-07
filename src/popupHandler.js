function showWinnerPopup(gameResult) {
  document.getElementById("popupContainer").style.display = "block";

  if (gameResult === "X") {
    document.getElementById("winnerPopup").style.display = "Block";
    document.getElementById("winner").innerText = "Player X is the winner!";
  } else if (gameResult === "O") {
    document.getElementById("winnerPopup").style.display = "Block";
    document.getElementById("winner").innerText = "Player O is the winner!";
  }
}

function matchDrawPopup() {
  document.getElementById("popupContainer").style.display = "block";
  document.getElementById("drawMatchPopup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popupContainer").style.display = "none";
  document.getElementById("drawMatchPopup").style.display = "none";
  document.getElementById("winnerPopup").style.display = "none";
  document.getElementById("popupContainer").style.background =
    "rgba(0, 0, 0, 0.6)";
  document.getElementById("startScreenPopup").style.display = "none";
  document.getElementById("playerWinPopup").style.display = "none";
  document.getElementById("defeatPopup").style.display = "none";
}

displayStartScreen();
function displayStartScreen() {
  document.getElementById("popupContainer").style.display = "block";
  document.getElementById("popupContainer").style.background = "#0B0A1E";
  document.getElementById("startScreenPopup").style.display = "block";
}

function singlePlayerResultPopup(result) {
  if (result == "Win") {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("playerWinPopup").style.display = "block";
  }
  if (result == "Loss") {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("defeatPopup").style.display = "block";
  }
}

function showGamePage() {
  document.getElementById("gamepage").style.opacity = 1;
}
