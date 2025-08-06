//Bot mode
let isBotMode = false;
const singlePlayer = document.getElementById("singlePlayer");
singlePlayer.addEventListener("click", function () {
  isBotMode = true;
  hidePopup();
});

//Player mode
const twoPlayer = document.getElementById("twoPlayer");
twoPlayer.addEventListener("click", function () {
  isBotMode = false;
  hidePopup();
});
