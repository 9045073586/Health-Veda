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
  thanks.style.transition="0.2s linear";
  thanks.style.transform = "translate(50%, 50%)";
  thanks.classList.remove("thanks-visible");
  
}

// prevent default behaviour of form
document.getElementById("form").addEventListener("click", (event) => {
  event.preventDefault();
})

function thanksVisible() {
  popup.classList.remove("open-popup");
  thanks.classList.add("thanks-visible");
}

setInterval(function time() {
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if ((min + "").length == 1) {
    min = "0" + min;
  }
  var sec = 60 - d.getSeconds();
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }
  document.getElementById("thanksPara").innerHTML =
    `our team call you back within ${hours}:${min}:${sec} hours.`;
}, 1000);