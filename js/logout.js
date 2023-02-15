let logout = document.querySelector("#logout");

logout.addEventListener("click", goOut);

function goOut() {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location.href = "/index.html";
}

if (!localStorage.getItem("name") && !localStorage.getItem("password")) {
  window.location.href = "/index.html";
}

// Anteckningar
//https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=859:javascript-redireccionar-y-recargar-webs-windowlocation-href-hostname-assign-reload-replace-cu01171e&catid=78&Itemid=206
//https://www.w3schools.com/js/js_window_location.asp
