let name_ = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#formMessage");
let button = document.querySelector("#submitBtn");
let p = document.getElementById("thanks");
let form = document.querySelector("#form");
let alertName = document.createElement("p");

button.disabled = true;
button.addEventListener("click", thanks);

name_.addEventListener("input", check);
email.addEventListener("input", check);
phone.addEventListener("input", check);

button.addEventListener("click", remove);

phone.addEventListener("input", warnings);

alertName.setAttribute("id", "alertNameId");

function check() {
  if (
    name_.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    isNaN(phone.value)
  ) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
function warnings() {
  if (isNaN(phone.value)) {
    form.insertBefore(alertName, message);
    alertName.textContent = `⚠ You have to write numbers`;
  } else {
    if (alertName.parentNode) {
      form.removeChild(alertName);
    }
  }
}

function remove() {
  if (name_.value !== "" || email.value !== "") {
    form.reset();
    button.disabled = true;
  }
}

function thanks(e) {
  e.preventDefault();
  p.textContent = `Thank you for message ${name_.value}. Get will get in touch soon 😃! `;
}

// Jon tips:
// Använd isNaN(...) i din if. "=== NaN" fungerar inte (NaN === NaN är false)
//funkar inte, dubble kolla på detta "isNaN"
