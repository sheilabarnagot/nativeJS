let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let inputButton = document.querySelector("#inputButton");
let logInContainer = document.querySelector("#logInContainer");
let nameError = document.createElement("p");
let passwordAlert = document.createElement("p");

inputButton.disabled = true;
userName.addEventListener("input", userNameError);
password.addEventListener("input", passwordError);
passwordAlert.setAttribute("class", "alerts");
nameError.setAttribute("class", "alerts");

function userNameError() {
  if (userName.value.length <= 2) {
    nameError.textContent = `❌ You have to write more than 2 characters`;
    logInContainer.insertBefore(nameError, password);
    inputButton.disabled = true;
  }
  if (userName.value.length === 3 && inputButton.disabled === true) {
    nameError.textContent = "";
    if (password.value.length > 8) {
      inputButton.disabled = false;
    }
  }
}

function passwordError() {
  if (password.value.length <= 8) {
    passwordAlert.textContent = `You have to write 8 numbers min 🚫`;
    logInContainer.insertBefore(passwordAlert, inputButton);
    inputButton.disabled = true;
  }
  if (password.value.length === 9 && inputButton.disabled === true) {
    passwordAlert.textContent = "";
    if (userName.value.length > 2) {
      inputButton.disabled = false;
    }
  }
}

inputButton.addEventListener("click", storage);

function storage() {
  localStorage.setItem("name", userName.value);
  localStorage.setItem("password", password.value);
  window.location.href = "/html/picturefinder.html";
}

if (localStorage.getItem("name") && localStorage.getItem("password")) {
  window.location.href = "/html/picturefinder.html";
}

//Anteckningar:
//like a appendChild jag använder insertBefore
// http://www.codexexempla.org/curso/curso_4_3_d.php
//https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=859:javascript-redireccionar-y-recargar-webs-windowlocation-href-hostname-assign-reload-replace-cu01171e&catid=78&Itemid=206
//https://www.w3schools.com/js/js_window_location.asp
