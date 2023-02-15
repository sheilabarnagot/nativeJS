const main = document.querySelector("main");
let coins = document.querySelector("#coin");
let number = document.querySelector("#number");
let date = document.querySelector("#date");
let submit = document.querySelector("#submit");
let converted = document.querySelector("#converted");
const host = "api.frankfurter.app";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (number.value <= 0 || number.value === undefined) {
    converted.style.display = "block";
    return (converted.innerHTML = `<p class="valutor">The value of the number must be greater than 0.</p>`);
  }

  fetch(
    `https://${host}/${date.value}?amount=${number.value}&from=${coins.value}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      let div = document.createElement("div");

      if (converted.childNodes.length > 0) {
        converted.removeChild(converted.firstChild);
      }
      converted.style.display = "block";
      let valuta = document.createElement("p");
      valuta.setAttribute("class", "valutor");
      converted.appendChild(div);
      let valutor = "";
      for (const [key, value] of Object.entries(data.rates)) {
        valutor = valutor + (value + " " + key + "\n");
        valuta.innerText = `${date.value} =
          ${valutor}`;
        div.appendChild(valuta);
      }

      let coins = [];
      for (coin in data.rates) {
        coins.push(coin);
      }
      let values = [];
      for (value of Object.entries(data.rates)) {
        values.push(value[1]);
      }

      const canvas = document.createElement("canvas");
      canvas.setAttribute("id", "myChart");

      let divChart = document.createElement("div");
      main.appendChild(divChart);
      divChart.appendChild(canvas);
      divChart.setAttribute("id", "divChart");

      // const ctx = document.getElementById("myChart").getContext("2d");

      const myChart = new Chart(canvas.getContext("2d"), {
        type: "line",
        data: {
          labels: coins,
          datasets: [
            {
              label: "Currencies values",
              data: values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
});

// divchart--> Vill inte använda removechild eftersom i detta fall tycker jag är interessant att se skillnader mellan valutor

// Linea 24-> Creo un elemento div en una variable div. El proposito de esto
// es crear una caja donde meteremos las p (el resultado de la informacion que buscamos)
//  Linea 26-> if/si el div#converted tuviera más hijos de 0 {la funcion es que elimina el primer hijo}
// Entonces si le damos al boton ya tendremos un hijo qu es el creado anteriormente en el primer div (linea 24)
// Linea 29-> Pido al converted que muestre la caja del converted (porque en el CSS he dicho que no se muestre la caja con display: 'none')
// Linea 30-> Variable valua que crea un Elemento <p> para obtener y empaquetar en la p la data de la API
// Linea 31-> anadimos un atributo que en este caso es una class que se llama valutor, i este atributo class es de valuta. y estoy nos aporta que podamos manipular el estilo en css.
// Linea 32-> Le anadimos un hijo div al converted para mostrar la información.
// Linea 33-> creo una variable con un string.
// Linea 34-> El for ..of es un loop para darle el valor a la variable valutor. for/para ([]<- utilizo esta array para metor las partes que quiero sacar de rates of (Object.entries->devulve los pares de una array))
// 1 += 2 esto es lo mismo que poner 1= 1+2 le decimos que valutor es los mimso que valutor sumando el valor y la llave
// Linea 36-> Anadimos el texto de la fecha = a la la data de valutor que son el valor de las monedas
// Linea 38-> Le anadimos un hijo div al converted para
// Linea 39-> valuta es el hijo de div. Y div es el hijo de converted. y estoy nos ayuda a volver a tener un div porque anteriormente borramo el div qu etenemos con la informacion despues de obtener la informacion.

// ----------------------------------------------
// let p = document.createElement("p");
//for (let i = 0; i < 12; i += 1)
// valuta.setAttribute("show", data.rates[i]);
// console.log("key: " + key + ", value: " + value);

// -------------------------------- Funkar inte :
// fetch(
//   `https://${host}/${date.value}?amount=${number.value}&from=${coins.value}`
// )
// .then((resp) => resp.json())
// .then((data)=> {
// for(let i = 0; i < 12; i+= 1){
// let valuta = document.createElement('valuta')

// valuta.setAttribute('show', data.rates[i])
// valuta.setAttribute('class', 'valutor')
// converted.appendChild(valuta)
// }

// ---------------alternative (funkar inte)-----------------//

// const host ="api.frankfurter.app"

//   const resp = fetch(`https://${host}/${date.value}?amount=${number.value}&from=${coins.value}`)

// let hej ="string"
// let hej2 = "string2"
// hej += hej2
// console.log(hej);

//   const data =resp.json()
//   for (const rate of data.rates){
//   converted.innerHTML += `${rate} - ${data.rates[rate]}`
//   }
