let getCities = document.querySelector("#getCities");
let allCities = document.querySelector("#allCities");

getCities.addEventListener("click", get);

function get() {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((result) => {
      let div = document.createElement("div");
      if (allCities.childNodes.length > 0) {
        allCities.removeChild(allCities.firstChild);
      }
      for (let i = 0; i < result.length; i++) {
        let p = document.createElement("p");
        p.textContent = `${result[i].name}`;
        div.appendChild(p);
      }

      allCities.appendChild(div);
    });
}

// https://www.chartjs.org/docs/latest/configuration/responsive.html

// https://www.chartjs.org/docs/latest/configuration/responsive.html#important-note

// fetch('https://avancera.app/cities/')
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//   })
