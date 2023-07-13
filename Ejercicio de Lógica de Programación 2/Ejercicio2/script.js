var inputF = parseInt(prompt("Ingrese la temperatura en grados Celsius"));
var inputK= inputF;

var contenido = document.querySelector(".contenido");

function cAF(valor){
    var h2 = document.createElement("h2");
    h2.innerHTML ="Grados Farenheit: " + ((valor * (9/5)) + 32);
    contenido.appendChild(h2);
}

cAF(inputF);

function cAK(valor){
    var h2 = document.createElement("h2");
    h2.innerHTML = "Grados Kelvin: "+ (valor + 273.15);
    contenido.appendChild(h2);
}

cAK(inputK);