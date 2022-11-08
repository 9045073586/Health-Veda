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
