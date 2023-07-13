
const contenido = document.querySelector(".contenido");
var numeroRandom = Math.round(Math.random() * 100);
let respuesta = "";
var input;

while (input !=numeroRandom){
    var h2 = document.createElement("h2");
    input = parseInt(prompt("Ingrese un número del 1 al 100"));

    if (input <= 100 && input >= 1) {

        if (input == numeroRandom) {
            respuesta="Felicidades, adivinaste el número secreto.";
        }

        else {
            console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.")
            console.log("el numero era " + numeroRandom);
        }
    }

    else {
        console.log("El valor ingresado no es válido");
    }
    
    h2.innerHTML = respuesta;
    contenido.appendChild(h2);
  
}
