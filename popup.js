let popup = document.getElementsByClassName("popup")[0];

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
  document.getElementsByClassName("input")[0].value = "";
  document.getElementsByClassName("input")[1].value = "";
  document.getElementById("message").value = "";
}

var thanks = document.getElementsByClassName("thanks")[0];

function hide() {
  thanks.style.transition="0.4s linear";
  thanks.style.transform = "translate(50%, 50%)";
  thanks.classList.remove("thanks-visible");
  
}

function thanksVisible() {
  popup.classList.remove("open-popup");
  thanks.classList.add("thanks-visible");
}