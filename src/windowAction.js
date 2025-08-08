window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
});

//Block text animation
function addAnimation(component) {
  component.classList.remove("block-text");
  void component.offsetWidth;
  component.classList.add("block-text");
}
