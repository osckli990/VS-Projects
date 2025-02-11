// Get the div, and when the user clicks on it, execute myFunction
document.getElementById("hidden-ham").onclick = function () { hamScript() };

/* hamscript toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function hamScript() {
  document.getElementById("dropdown").classList.toggle("show");
}