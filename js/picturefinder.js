let search = document.querySelector("#search");
let searchButton = document.querySelector("#searchBTN");
let resultImage = document.querySelector("#resultImg");

searchButton.addEventListener("click", lookUp);

function lookUp(e) {
  e.preventDefault();
  fetch(`https://imsea.herokuapp.com/api/1?q=${search.value}`)
    .then((resp) => resp.json())
    .then((data) => {
      let div = document.createElement("div");
      if (resultImage.childNodes.length > 0) {
        resultImage.removeChild(resultImage.firstChild);
      }
      for (let i = 0; i < Math.min(data.results.length, 23); i += 2) {
        let img = document.createElement("img");
        img.setAttribute("src", data.results[i]);
        img.setAttribute("class", "picture");
        div.appendChild(img);
      }
      resultImage.appendChild(div);
    });
}

//COOOOOOORS PROBLEM!!!! --'

//Avoid reload in the webside (happen because of the form element) --> preventdefault()

// Jon tips:
//Math.min(data.results.length, 23).

// Anteckningar FETCH;

// Solicitud GET (Request).
// fetch('https://api.github.com/users/manishmshiva')
//     // Exito
//     .then(response => response.json())  // convertir a json
//     .then(json => console.log(json))    //imprimir los datos en la consola
//     .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
//line: 21 Jon tips
